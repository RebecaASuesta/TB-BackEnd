const db = require('../config/database.js');

const CategoryController = {
    createTableCategories(req, res) {
        let sql = "CREATE TABLE categories (id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id));"
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Categories table created...");
        });
    },

    addCategory(req, res) {
        let sql = `INSERT INTO categories (name) values ('${req.body.name}');`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Category added...");
        });
    },

    updateCategoryByID(req, res) {
        let newName = req.body.name;
        let sql = `UPDATE categories SET name = '${newName}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send("Category updated...");
        });
    },

    categories(req, res) {
        let sql = "SELECT * FROM categories";
        db.query(sql, (err, results) => {
          if (err) throw err;
          res.send(results);
        });
    },

    getCategoryByID(req, res) {
        let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
    }
}

module.exports = CategoryController;