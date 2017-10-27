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

const app = express();
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
// app.post('/api/shop/addUser', auth_ctr.add_user);
app.post('/api/shop/addProductsOrdered', shop_ctr.add_productsOrdered);

app.get('/api/items', shop_ctr.getItems);
// app.get('/api/shop/getProductsOrdered', shop._ctr.get_productsOrdered)

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

passport.serializeUser((id, done) => {

  done(null, id)
})
passport.deserializeUser((id, done) => {
  done(null, id);
})

app.post('/api/users', auth_ctr.createUser)

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT} `, ctrl.AUTH_DOMAIN));