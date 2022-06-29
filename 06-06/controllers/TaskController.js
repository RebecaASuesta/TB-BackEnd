// const { send } = require('express/lib/response')
const Task = require('../models/Task')

const TaskController = {
    async create(req, res) {
        try {
            const task = await Task.create({ title: req.body.title, completed: false })
            res.status(201).send({ msg: 'Tu movida se ha creado correctamente', task })
        } catch (error) {
            console.error(error)
            res.send(error)
        }
    },
    
    async getAll(req, res) {
        try {
            const tasks = await Task.find()
            res.send({ msg: "Estas son todas las movidas", tasks })
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    
    async getById(req, res) {
        try {
            const task = await Task.findById(req.params._id)
            res.send({ msg: "Esta es tu movida por ID", task })
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    
    async markAsCompleted(req, res) {
        try {
            const taskCompleted = await Task.findByIdandUpdate(req.params._id,
                { completed: true },
                { new: true })
            res.send({ msg: "Esta es tu movida completada", taskCompleted })
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    
    async update(req, res) {
        try {
            const taskUpdated = await Task.findByIdAndUpdate(req.params._id,
                { title: req.body.title },
                { new: true })
            res.send({ msg: "Esta es tu movida actualizada", taskUpdated })
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    
    async delete(req, res) {
        try {
            const taskDeleted = await Task.findByIdAndDelete(req.params._id)
            res.send({ msg: "Tu movida ha sido eliminada", taskDeleted })
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

module.exports = TaskController