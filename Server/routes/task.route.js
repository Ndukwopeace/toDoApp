const taskController = require('../controllers/task.controller');
const express = require('express');
const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:taskId', taskController.getOneTask);

router.post('/create', taskController.createTask);
router.put('/edit/:taskId', taskController.updateTask);
router.delete('/delete/:taskId' , taskController.deleteTask);


module.exports = router;