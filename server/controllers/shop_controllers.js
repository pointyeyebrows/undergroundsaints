module.export = {
    add_order: (req, res, next) => {
        const { fulfilled, total, paid } = req.body;
        const db = req
            .app
            .get("db")
        db
            .add_order( [fulfilled, total, paid] )
            .then(response => res.status(200).send(response))
    },
    add_product: (req, res, next) => {
        const { name, category, brand, price, description, size, img_url } = req.body;
        const db = req
            .app
            .get("db")
        db
            .add_product( [name, category, brand, price, description, size, img_url] )
            .then(response => res.status(200).send(response))
    },
    add_productsOrdered: (req, res, next) => {
        const { user_id, product_id, order_id, quantity } = req.body;
        const db = req
            .app
            .get("db")
        db
            .add_productsOrdered( [user_id, product_id, order_id, quantity] )
            .then(response => res.status(200).send(response))
    },
    add_user: (req, res, next) => {
        const { first_name, last_name, username, email, admin } = req.body;
        const db = req
            .app
            .get("db")
        db
            .add_user( [ first_name, last_name, username, email, admin ] )
            .then(response => res.status(200).send(response))
    }
}