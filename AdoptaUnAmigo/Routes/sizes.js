const express = require('express');
const router = express.Router();
const SizeController = require('../controllers/SizeController')
const { authentication, isAdmin } = require('../middleware/authentication');

router.post('/add', authentication, isAdmin, SizeController.create)
router.get('/all', authentication, isAdmin, SizeController.getAll)

module.exports = router;