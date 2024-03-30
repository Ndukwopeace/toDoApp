const express = require('express');
const router = express.Router(); 
const taskController = require('../controllers/task.controller');

router.post('/create', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/:taskId', taskController.getOneTask);

router.put('/edit/:taskId', taskController.updateTask);
router.delete('/delete/:taskId' , taskController.deleteTask);


module.exports = router;