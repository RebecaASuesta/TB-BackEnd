const express = require('express');
const router = express.Router();
const AdoptionController = require('../controllers/AdoptionController');
const { authentication, isSuperAdmin, isAdmin } = require('../middleware/authentication');


router.post('/add', authentication, isSuperAdmin, AdoptionController.create)
router.get('/all', authentication, isAdmin, AdoptionController.getAll)
router.get('/id/:id', authentication, isAdmin, AdoptionController.getById)
router.put('/update/:id', authentication, isAdmin, AdoptionController.updateById)
router.delete('/delete/:id', authentication, isSuperAdmin, AdoptionController.deleteById)

module.exports = router;