const express = require('express');
const router = express.Router();
const FamilyController = require('../controllers/FamilyController')
const { authentication, isSuperAdmin, isAdmin } = require('../middleware/authentication');

router.post('/add', authentication, isAdmin, FamilyController.create)
router.get('/all', authentication, FamilyController.getAll)
router.get('/id/:id', authentication,FamilyController.getById)
router.get('/name/:name', authentication,FamilyController.getByName)
router.get('/size/:id', authentication, FamilyController.getFamiliesBySize)
router.put('/update/:id', authentication, isSuperAdmin, FamilyController.updateById)
router.delete('/delete/:id', authentication, isSuperAdmin, FamilyController.deleteById)

module.exports = router;