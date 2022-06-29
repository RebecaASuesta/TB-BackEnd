const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { authentication, isAdmin } = require("../middlewares/authentication");
const upload = require('../middlewares/multer');

router.post('/', upload.single("avatar"), UserController.create)
router.post('/login', UserController.login)
router.get('/confirm/:emailToken', UserController.confirm)
router.put('/logout',authentication, UserController.logout)
router.delete('/id/:_id', authentication, UserController.delete)
router.delete('/admin/id/:_id', authentication, isAdmin, UserController.deleteByAdmin)
router.get('/', UserController.getAll)
router.get('/name/:name', UserController.getByname)
router.get('/id/:_id', authentication, UserController.getById)
router.get('/getInfo', authentication, UserController.getInfo)

module.exports = router;