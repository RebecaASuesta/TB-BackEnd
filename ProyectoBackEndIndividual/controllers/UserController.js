const User = require("../models/User.js");
const Post = require("../models/Post.js")
const jwt = require('jsonwebtoken');
require("dotenv").config();
const jwt_secret = process.env.JWT_SECRET;
const bcrypt = require ('bcryptjs');
// const transporter = require("../config/nodemailer")

const UserController = {
    async create(req, res, next) {
        try {
            // Cambiar a false cuando vuelva a funcionar el correo de confirmación
            req.body.confirmed = true;
            req.body.role = "Vecin@";
            const password = await bcrypt.hash(req.body.password, 10);
            if (req.file)req.body.image = (req.file.destination + req.file.filename);
            const user = await User.create({
                ...req.body,
                confirmed: req.body.confirmed,
                password: password
            });
            const emailToken = jwt.sign({ email: req.body.email }, jwt_secret, {expiresIn:'48h'});
            const url = 'http://localhost:8080/users/confirm/' + emailToken;
            // Descomentar cuando vuelva a funcionar el correo de confirmación
            // await transporter.sendMail({
            //     to: req.body.email,
            //     subject: "Confirme su registro",
            //     html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
            //     <a href="${url}"> Click para confirmar tu registro</a>
            //     `
            // });
            res.status(201).send({ message: 'Te hemos enviado un correo para confirmar la mudanza', user })
        } catch (error) {
            console.error(error)
            error.origin = "User";
            next(error)
        }
    },

    async confirm(req, res) {
        try {
            const token = req.params.emailToken;
            const payload = jwt.verify(token,jwt_secret);
            await User.updateOne({ mail: payload.mail }, { $set :{confirmed:true}});
            res.status(201).send( "Vecino mudado con éxito" );
        } catch (error) {
            console.error(error)
        }
    },
    

    async login(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (!user) {
                res.status(400).send({ message: 'Correo o contraseña incorrectos' })
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if(!isMatch) {
                res.status(400).send({ message: 'Correo o contraseña incorrectos' })
            }
            const token = jwt.sign({ _id: user._id }, jwt_secret);
            if (user.tokens.length > 4) user.tokens.shift();
            user.tokens.push(token);
            await user.save();
            res.send({ message: 'Bienvenid@ a ésta nuestra comunidad, ' + user.name, user, token });
        } catch (error) {
            console.error(error);
        }
    },

    async logout(req, res) {
        try {
            await User.findByIdAndUpdate(req.user._id, {
                $pull: { tokens: req.headers.authorization },
            });
            res.send({ message: "Vecino desconectado con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Hubo un problema al intentar desconectar al vecino" });
        }
    },
    
    async delete(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params._id)
            res.send({ user, message: 'Ya no eres un vecino de esta nuestra comunidad' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema con la mudanza del vecino' })
        }
    },
    
    async deleteByAdmin(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params._id)
            res.send({ user, message: 'Vecin@ mudado con éxito por Concha' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema con la mudanza del vecino' })
        }
    },

    async getInfo(req, res) {
        try {
            const user = await User.findById(req.user._id)
            .populate({
                path: "postIds",
                populate: {
                    path: "commentIds"
                }
            })
            .populate("likeIds")
            res.send(user)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al cargar la información del vecino' })
        }
    },

    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const users = await User.find()
                .populate("postIds")
                .limit(limit * 1)
                .skip((page - 1) * limit);
            res.send(users)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al cargar los vecinos' })
        }
    },

    async getById(req, res) {
        try {
            const user = await User.findById(req.params._id)
            res.send(user)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al cargar el vecino' })
        }
    },

    async getByname(req, res) {
        try {
            if (req.params.name.length > 20) {
                return res.status(400).send('Búsqueda demasiado larga')
            }
            const name = new RegExp(req.params.name, "i");
            const user = await User.find({name});
            res.send(user)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al cargar los vecinos' })
        }
    }
}

module.exports = UserController;