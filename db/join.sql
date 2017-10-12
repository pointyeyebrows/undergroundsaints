select products.id as prod_id, orders.id as ord_id, productsordered.id as ordered_id, brand, price, category, description, size, first_name, last_name, username, email, admin, fulfilled, quantity, paid, total from productsordered
join orders on productsordered.order_id = orders.id
join products on productsordered.product_id = products.id
join users on productsordered.user_id = users.id
where users.id = $1;