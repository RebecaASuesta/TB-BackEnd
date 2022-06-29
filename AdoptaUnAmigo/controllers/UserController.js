const { User, Adoption, Animal, Family, Sequelize, Token } = require("../models/index.js");
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const { getAll } = require("./SizeController.js");
const { jwt_secret } = require('../config/config.json')['development'];
const { Op } = Sequelize;

const UserController = {
  async create(req, res) {
    req.body.role = "User";
    const password = await bcrypt.hash(req.body.password,10);
    try {
      await User.create({ ...req.body, password: password });
      const user = res
      .status(201)
      .send({ message: "Usuario creado con éxito", User })
    } catch (err) {
      console.log(err);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        where:{ email:req.body.email }
      })
      if (!user) {
        res.status(400).send({
          message:"Usuario no encontrado: Usuario o contraseña incorrectos"
        })
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if(!isMatch) {
        res.status(400).send({
          message:"Error de datos: Usuario o contraseña incorrectos"})
      }
      token = jwt.sign({ id: user.id }, jwt_secret);
      Token.create({ token, UserId: user.id });
      res.send({message: "¡Cuánto tiempo sin verte " + user.name, user, token})
    } catch (err) {
      console.log(err);
    }
  },

  async getAll (req, res) {
    try {
      const user = await User.findAll({
        include: [{ model: Adoption, include: [{ model: Animal,include:[{model: Family, attributes: ['species_name']}]}]}],
      });
      res.send(user)
    } catch (err) {
      console.log(err);
      res.status(500).send({ 
        message: "Ha habido un problema al cargar los usuarios"
      });
    }
  },

  async deleteById(req, res) {
    try {
      const user = await User.destroy({
        where: { id: req.params.id }
      });
      res.send("El usuario ha sido eliminado con éxito");
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema al borrar el usuario"
      });
    }
  },

  async updateById(req, res) {
    try {
    const password = await bcrypt.hash(req.body.password,10);
    const user = await User.update(
          { ...req.body, password: password},

        {
          where: {
            id: req.params.id,
          },
        }
      );
       res.send({message:"Usuario actualizado con éxito"});
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Ha habido un problema al actualizar el usuario" });
    }
  },

  async getById(req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        include: [Adoption],
      });
      res.send(user);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema buscar el usuario y sus adopciones",
      });
    }
  },
  
  async logout(req, res) {
    try {
        await Token.destroy({
            where: {
                [Op.and]: [
                    { UserId: req.user.id },
                    { token: req.headers.authorization }
                ]
            }
        });
        res.send({ message: 'Desconectado con éxito' })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
    }
  }
};

module.exports = UserController;