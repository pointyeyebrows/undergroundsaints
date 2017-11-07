require('dotenv').config();

const express = require('express')
const massive = require('massive')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const ctrl = require('./config.js')
const auth_ctr = require('./controllers/auth_controllers.js')
const shop_ctr = require('./controllers/shop_controllers.js')
const stripe = require('stripe')(process.env.STRIPE_PRV_KEY)



const app =  express();
massive(process.env.CONNECTION_STRING).then(db => {
     

  app.set("db", db)
})

app.use(cors());

app.use(bodyParser.json());
app.use(session({secret: process.env.SECRET, resave: false, saveUninitialized: true}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.AUTH_CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {
  const db = app.get('db');
  // console.log(profile)

  db.find_user([profile.identities[0].user_id]).then(user => {
      if (user[0]) {
        
        return done(null, user[0].id)
      } else {
        const user = profile._json;
        db.create_user([user.given_name, user.family_name, user.nickname, user.email, user.identities[0].user_id]).then(user => {
          
            done(null, user[0].id)
          })
      }
    })
 
}));
// -------------------ENDPOINTS-------------------//
// app.post('/api/shop/addOrder', shop_ctr.add_order );
// app.post('/api/shop/addProduct', shop_ctr.add_product);
// app.post('/api/shop/addUser', auth_ctr.addUser);
app.post('/api/shop/addProductsOrdered', shop_ctr.add_productsOrdered);

app.get('/api/items', shop_ctr.getItems);
app.get('/api/shop/getProductsOrdered/:user_id', shop_ctr.get_productsOrdered);

app.get('/auth/me', (req, res) => {
  if (!req.user) {
    return res.status(401).send('No user found')

  }
  else {
    return res.status(200).json(req.user);
  }
})

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/#/',
  failureRedirect: '/auth'
}))
app.get('/auth/logout', (req, res) => {
  req.logOut();
  res.redirect(302, 'http://localhost:3000/#/')

})



passport.serializeUser((id, done) => {

  done(null, id)
})
passport.deserializeUser((id, done) => {
  done(null, id);
})

app.post('/api/users', auth_ctr.createUser)

app.post('/api/payment', function(req, res, next){
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.token.id,
  description: 'Test charge from react app'
}, function(err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});


const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT} `, ctrl.AUTH_DOMAIN));