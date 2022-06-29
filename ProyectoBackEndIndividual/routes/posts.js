const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');
const { authentication, isAdmin, isAuthorPost } = require("../middlewares/authentication");

router.post('/', authentication, PostController.create)
router.put('/id/:_id', authentication, isAuthorPost, PostController.update)
router.delete('/id/:_id', authentication, isAuthorPost, PostController.delete)
router.delete('/admin/id/:_id', authentication, isAdmin, PostController.deleteByAdmin)
router.get('/', PostController.getAll)
router.get('/title/:title', PostController.getByTitle)
router.get('/id/:_id', authentication, PostController.getById)
router.put('/like/id/:_id', authentication, PostController.like)
router.put('/dislike/id/:_id', authentication, PostController.dislike)

module.exports = router;