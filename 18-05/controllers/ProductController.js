const db = require('../config/database.js');

const ProductController = {
    createTableProducts(req, res) {
        let sql = "CREATE TABLE products (id INT AUTO_INCREMENT, name VARCHAR(255), price INT, PRIMARY KEY(id));"
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Products table created...");
        });
    },
    
    addProduct(req, res) {
        let sql = `INSERT INTO products (name, price) values ('${req.body.name}', '${req.body.price}');`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Product added...");
        });
    },

    updateProductByID(req, res) {
        let newName = req.body.name;
        let newPrice = req.body.price;
        let sql = `UPDATE products SET name = '${newName}', price = ${newPrice} WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send("Product updated...");
        });
    },

    products(req, res) {
        let sql = "SELECT * FROM products";
        db.query(sql, (err, results) => {
          if (err) throw err;
          res.send(results);
        });
    },

    getProductByID(req, res) {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
    },

    getProductByIDDesc(req, res) {
        let sql = `SELECT * FROM products order by id desc`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
    },

    getProductByName(req, res) {
        let sql = `SELECT * FROM products WHERE name LIKE '${req.params.name}'`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
    },

    deleteProduct(req, res) {
        let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send("Product deleted");
        });
    }
}

module.exports = ProductController;