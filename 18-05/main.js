// Ejercicio 1
const express = require("express");
const app = express();
// const mysql = require("mysql2");
const puerto = 3000;
// const db = require('./config/database.js');

app.use(express.json());
app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "kongui11",
//   database: "expressDB"
// });

// db.connect();

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

// app.get("/createTableProducts", (req, res) => {
//   let sql = "CREATE TABLE products (id INT AUTO_INCREMENT, name VARCHAR(255), price INT, PRIMARY KEY(id));"
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Products table created...");
//   });
// });

// app.get("/createTableCategories", (req, res) => {
//   let sql = "CREATE TABLE categories (id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id));"
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Categories table created...");
//   });
// });

// app.get("/createTableProductsCategories", (req, res) => {
//   let sql = "CREATE TABLE productscategories (id INT AUTO_INCREMENT, products_id INT, categories_id INT, PRIMARY KEY(id), FOREIGN KEY(products_id) REFERENCES expressDB.products(id) ON DELETE CASCADE, FOREIGN KEY(categories_id) REFERENCES expressDB.categories(id) ON DELETE CASCADE);"
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("ProductsCategories table created...");
//   });
// });

// Ejercicio 2
// app.post("/addProduct", (req, res) => {
//   let sql = `INSERT INTO products (name, price) values ('${req.body.name}', '${req.body.price}');`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Product added...");
//   });
// });

// app.post("/addCategory", (req, res) => {
//   let sql = `INSERT INTO categories (name) values ('${req.body.name}');`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Category added...");
//   });
// });

// Ejercicio 3
// app.put("/updateProduct/:id", (req, res) => {
//   let newName = req.body.name;
//   let newPrice = req.body.price;
//   let sql = `UPDATE products SET name = '${newName}', price = ${newPrice} WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send("Product updated...");
//   });
// });

// app.put("/updateCategory/:id", (req, res) => {
//   let newName = req.body.name;
//   let sql = `UPDATE categories SET name = '${newName}' WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send("Category updated...");
//   });
// });

// Ejercicio 4
// - Crea un endpoint que muestre todos los productos
// app.get("/products", (req, res) => {
//   let sql = "SELECT * FROM products";
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// - Crea un endpoint que muestre todas las categorías
// app.get("/categories", (req, res) => {
//   let sql = "SELECT * FROM categories";
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// - Crea un endpoint que muestra todos los productos con sus categorías
// Primero dar valores a la tabla
app.post("/addProductCategory", (req, res) => {
  let sql = `INSERT INTO productscategories (products_id, categories_id) values ('${req.body.products_id}', '${req.body.categories_id}');`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Product category added...");
  });
});

app.get("/productsCateogories", (req, res) => {
  let sql = "SELECT * FROM productscategories";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// - Crea un endpoint donde puedas seleccionar un producto por id
// app.get("/getProductByID/:id", (req, res) => {
//   let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// - Crea un endpoint que muestre de forma descendente los productos
// app.get("/getProductByIDDesc", (req, res) => {
//   let sql = `SELECT * FROM products order by id desc`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// - Crea un endpoint donde puedas seleccionar una categoría por id
// app.get("/getCategoryByID/:id", (req, res) => {
//   let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// - Crea un endpoint donde puedas buscar un producto por su nombre
// app.get("/getProductByName/:name", (req, res) => {
//   let sql = `SELECT * FROM products WHERE name LIKE '${req.params.name}'`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// Ejercicio 5
// app.delete("/deleteProduct/:id", (req, res) => {
//   let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send("Product deleted");
//   });
// });

app.listen(puerto, () => {
  console.log(`Server running in port ${puerto}`);
});