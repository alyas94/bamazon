DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;
use bamazondb;
CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
    product_name VARCHAR
    (50),
    department_name VARCHAR
    (50),
    price DECIMAL,
    stock_quantity INT,
    PRIMARY KEY
    (item_id)
);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("Playstation 4", "Electronics", 299.99, 20),
        ("Red Bull", "Grocery", 2.45, 15),
        ("Hot Cheetos", "Grocery", 3.79, 100),
        ("Blue Jens", "Clothing", 35.00, 50),
        ("Samsung Television", "Electronics", 579.85, 10),
        ("Socks", "Clothing", 5.00, 400);
	