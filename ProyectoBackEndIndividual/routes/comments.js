const express = require('express');
const router = express.Router()
const CommentController = require('../controllers/CommentController');
const { authentication, isAdmin, isAuthorComment } = require("../middlewares/authentication");

router.post('/', authentication, CommentController.create)
router.put('/id/:_id', authentication, isAuthorComment, CommentController.update)
router.delete('/id/:_id', authentication, isAuthorComment, CommentController.delete)
router.delete('/admin/id/:_id', authentication, isAdmin, CommentController.deleteByAdmin)
router.get('/', CommentController.getAll)

module.exports = router;