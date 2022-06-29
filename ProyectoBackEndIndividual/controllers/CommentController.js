const Comment = require("../models/Comment.js");
const Post = require("../models/Post.js");
const User = require('../models/User.js');

const CommentController = {
    async create(req, res) {
        try {
            const comment = await Comment.create({
                ...req.body,
                userId: req.user._id,
                postId: req.body.postId
            })
            await Post.findByIdAndUpdate(req.body.postId, { $push: { commentIds: comment._id } }, {new:true})
            await User.findByIdAndUpdate(req.user._id, { $push: { commentIds: comment._id } })
            res.status(201).send({ message: 'Intervención creada con éxito', comment })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear la intervención' })
        }
    },

    async update(req, res) {
        try {
            const comment = await Comment.findByIdAndUpdate(
                req.params._id,
                {
                    ...req.body, 
                    userId: req.user._id
                },
                { new: true,}
            );
            res.send({ message: "Intervención actualizada con éxito", comment })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al actualizar la intervención' })
        }
      },
    
    async delete(req, res) {
        try {
            const comment = await Comment.findByIdAndDelete(req.params._id)
            res.send({ message: 'Inervención borrada con éxito' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al borrar la intervención' })
        }
    },

    async deleteByAdmin(req, res) {
        try {
            const comment = await Comment.findByIdAndDelete(req.params._id)
            res.send({ message: 'Soy Concha, entro' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al borrar la intervenión' })
        }
    },

    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const comments = await Comment.find()
                .limit(limit * 1)
                .skip((page - 1) * limit)
            res.send(comments)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al cargar las intervenciones' })
        }
    }
}

module.exports = CommentController;