const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { authentication, isAdmin, isSuperAdmin} = require('../middleware/authentication');

router.post('/add', UserController.create)
router.post('/login', UserController.login)
router.delete('/logout/:id', authentication, UserController.logout)
router.get('/all', authentication, isAdmin, UserController.getAll)
router.get('/id/:id', authentication, isAdmin, UserController.getById)
router.delete('/delete/:id', authentication, isAdmin ,UserController.deleteById)
router.put('/update/:id', authentication, isSuperAdmin, UserController.updateById)

module.exports = router;