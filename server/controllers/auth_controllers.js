module.exports = {
    
        createUser: (req, res, next) => {
            const db = req.app.get('db');
            const { first_name, last_name, username, email, admin } = req.body;
    
            db.create_user([first_name, last_name, username, email, admin])
            .then( () => res.status(200).send())
            .catch( () => res.status(500).send());
        }
    };