const Post = require("../models/Post.js");
const User = require("../models/User.js");

const PostController = {
    async create(req, res, next) {
        try {
            const post = await Post.create({
                ...req.body,
                userId: req.user._id,
                date: new Date()
            });
            await User.findByIdAndUpdate(req.user._id, {$push : {postIds: post._id}})
            res.status(201).send({ message: "Acta creada con éxito", post })
        } catch (error) {
            console.error(error)
            error.origin = "Post";
            next(error)
            }
    },

    async update(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true})
            res.send({ message: "Acta actualizada con éxito", post })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al actualizar el acta' })
        }
    },

    async delete(req, res) {
        try {
            const post = await Post.findByIdAndDelete(req.params._id)
            res.send({ message: 'Acta borrada con éxito', post })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al borrar el acta' })
        }
    },

    async deleteByAdmin(req, res) {
        try {
            const post = await Post.findByIdAndDelete(req.params._id)
            res.send({ message: 'Soy Concha, entro' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al borrar el acta' })
        }
    },

    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const posts = await Post.find()
                .populate("commentIds")
                .limit(limit * 1)
                .skip((page - 1) * limit);
            res.send(posts)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al cargar las actas' })
        }
    },

    async getById(req, res) {
        try {
            const post = await Post.findById(req.params._id)
                .populate("commentIds")
            res.send(post)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al cargar el acta' })
        }
    },

    async getByTitle(req, res) {
        try {
            if (req.params.title.length > 20) {
                return res.status(400).send('Búsqueda demasiado larga')
            }
            const title = new RegExp(req.params.title, "i");
            const post = await Post.find({title});
            res.send(post)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al cargar las actas' })
        }
    },

    async like(req, res) {
        try {
            const existPost = await Post.findById(req.params._id)
            if (!existPost.likes.includes(req.user._id)) {
                const post = await Post.findByIdAndUpdate(
                    req.params._id,
                    { $push: { likes: req.user._id } },
                    { new: true }
                );
                await User.findByIdAndUpdate(
                    req.user._id,
                    { $push: { likeIds: req.params._id } },
                    { new: true }
                );
                res.send(post);
            } else {
                res.status(400).send({message: "No puedes votar dos veces"})
            }
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un problema con tu voto" })
        }
    },

    async dislike(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                { $push: { dislikes: req.user._id } },
                { new: true }
            );
            await User.findByIdAndUpdate(
                req.user._id,
                { $push: { dislikeIds: req.params._id } },
                { new: true }
            );
            res.send(post);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un problema con tu voto" })
        }
    }
}

module.exports = PostController;