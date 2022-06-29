const express = require('express');
const router = express.Router();
// const db = require('../config/database.js');
const CategoryController = require('../controllers/CategoryController.js');

router.get("/createTableCategories", CategoryController.createTableCategories);

router.post("/addCategory", CategoryController.addCategory);

router.put("/updateCategory/:id", CategoryController.updateCategoryByID);

router.get("/categories", CategoryController.categories);

router.get("/getCategoryByID/:id", CategoryController.getCategoryByID);

module.exports = router;