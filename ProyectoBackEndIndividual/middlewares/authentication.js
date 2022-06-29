const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const jwt_secret = process.env.JWT_SECRET;
const authentication = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_secret);
        const user = await User.findOne({ _id: payload._id, tokens: token });
        if (!user) {
            return res.status(401).send({ message: 'No estás autorizado' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error, message: 'Ha habido un problema con el token' })
    }
};

const isAdmin = async (req, res, next) => {
    const admins = ['Concha'];
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({ message: 'No eres Concha' });
    }
    next();
};

const isAuthorPost = async(req, res, next) => {
    try {
        const post = await Post.findById(req.params._id);
        if (post.userId.toString() !== req.user._id.toString()) { 
            return res.status(403).send({ message: 'Esta acta no es tuya' });
        }
        next();
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error, message: 'Ha habido un problema al comprobar la autoría del acta' })
    }
};

const isAuthorComment = async(req, res, next) => {
    try {
        const comment = await Comment.findById(req.params._id);
        if (comment.userId.toString() !== req.user._id.toString()) { 
            return res.status(403).send({ message: 'Esta intervención no es tuya' });
        }
        next();
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error, message: 'Ha habido un problema al comprobar la autoría de la intervención' })
    }
};

module.exports = { authentication, isAdmin, isAuthorPost, isAuthorComment }