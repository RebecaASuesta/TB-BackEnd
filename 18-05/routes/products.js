const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')
// const db = require('../config/database.js');

router.get("/createTableProducts", ProductController.createTableProducts);

router.post("/addProduct", ProductController.addProduct);

router.put("/updateProduct/:id", ProductController.updateProductByID);

router.get("/products", ProductController.products);

router.get("/getProductByID/:id", ProductController.getProductByID);

router.get("/getProductByIDDesc", ProductController.getProductByIDDesc);

router.get("/getProductByName/:name", ProductController.getProductByName);

router.delete("/deleteProduct/:id", ProductController.deleteProduct);

module.exports = router;