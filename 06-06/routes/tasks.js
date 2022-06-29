const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();

router.post('/', TaskController.create);
router.get('/', TaskController.getAll);
router.get('/id/:_id', TaskController.getById);
router.put('/markAsCompleted/id/:_id', TaskController.markAsCompleted);
router.put('/id/:_id', TaskController.update);
router.delete('/id/:_id', TaskController.delete);

module.exports = router