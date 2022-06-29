const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Por favor, introduce el nombre de la publicación"]
    },
    completed: Boolean
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;