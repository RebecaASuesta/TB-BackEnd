const express = require('express');
const router = express.Router();
const AnimalController = require('../controllers/AnimalController');
const { authentication, isAdmin, isSuperAdmin } = require('../middleware/authentication');

router.post('/add', authentication, isAdmin, AnimalController.create)
router.get('/all',AnimalController.getAll)
router.get('/id/:id',authentication, isAdmin,AnimalController.getById)
router.get('/name/:name',authentication,AnimalController.getByName)
router.get('/gender/:gender',authentication,AnimalController.getByGender)
router.get('/age/desc' ,authentication, AnimalController.sortByAge)
router.get('/age/asc' ,authentication, AnimalController.sortByAgeAsc)
router.put('/update/:id', authentication, isAdmin, AnimalController.updateById)
router.delete('/delete/:id', authentication,isSuperAdmin, AnimalController.deleteById)

module.exports = router;