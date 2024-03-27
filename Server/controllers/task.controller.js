const taskModel = require('../models/tasks.model');

module.exports = {

    createTask: async (req, res) => {
        try {
            const task = await taskModel.create(req.body);
            return res.status(200).json({ task: task });

        } catch (err) {
            return res.status(500).json(err);
        }
    },

    updateTask: async (req, res) => {
        try {
            const updatedTask = await taskModel.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true, runValidators: true });
            return res.status(200).json({ updatedTask: updatedTask });

        } catch (err) {
            return res.status(500).json(err);
        }
    },
    getTasks: async (req, res) => {
        try {
            const Tasks = await taskModel.find({});
            return res.status(200).json({ Tasks: Tasks });

        } catch (err) {
            return res.status(500).json(err);
        }
    },
    getOneTask: async (req, res) => {
        try {
            const Task = await taskModel.findOne({ _id: req.params.taskId });

            return res.status(200).json({ Task: Task });

        } catch (err) {
            return res.status(500).json(err);
        }
    },

    deleteTask: async (req, res) => {
        try {
            await taskModel.findByIdAndDelete({ _id: req.params.taskId });
            return res.status(200).json("successfully deleted");

        } catch (err) {
            return res.status(500).json(err);
        }
    }

}