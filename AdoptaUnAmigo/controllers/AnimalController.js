const res = require("express/lib/response");
const {
  Animal,
  Adoption,
  User,
  Family,
  Size,
  Sequelize,
} = require("../models/index.js");
const { updateById } = require("./UserController.js");
const { Op } = Sequelize;

const AnimalController = {
  async create(req, res) {
    req.body.adoptionId = null;
    try {
      const animal = await Animal.create({ ...req.body });
      res.status(201).send({ message: "Animal subido con éxito", Animal });
    } catch (err) {
      err.origin = "Animal";
      next(error);
    }
  },

  async getAll(req, res) {
    try {
      const animal = await Animal.findAll({
        include: [
          {
            model: Family,
            attributes: ["species_name"],
          },
          { model: Adoption, include: [{ model: User }] },
        ],
      });
      res.send(animal);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema al cargar los animales",
      });
    }
  },

  async deleteById(req, res) {
    try {
      const animal = await Animal.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send("El animal ha sido dado de baja con éxito");
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema al borrar el animal",
      });
    }
  },

  async updateById(req, res) {
    try {
      const animal = await Animal.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send("Animal actualizado con éxito");
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema con los datos del animal",
      });
    }
  },

  async getById(req, res) {
    try {
      const animal = await Animal.findByPk(req.params.id);
      if (!animal) {
        res.status(200).send({
          message: "No hemos encontrado ningún animal con esta ID :(",
        });
      } else {
        res.send(animal);
      }


    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema al buscar el animal",
      });
    }
  },

  async getByName(req, res) {
    try {
      const animal = await Animal.findAll({
        where: {
          name: {
            [Op.like]: `%${req.params.name}%`,
          },
        },
      });
      if (animal.length === 0) {
        res.status(200).send({
          message: "No hemos encontrado ningún animal con este nombre :(",
        });
      } else {
        res.send(animal);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: "Algo ha fallado al buscar el animal" });
    }
  },

  async getByGender(req, res) {
    try {
      const animalGender = await Animal.findAll({
        where: {
          gender: {
            [Op.like]: `%${req.params.gender}%`,
          },
        },
      });
      if (animalGender.length === 0) {
        res.status(200).send({
          message: "No hemos encontrado ningún animal con esta definicion :(",
        });
      } else {
        res.send(animalGender);
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Algo ha fallado al filtrar los animales por sexo" });
    }
  },

  async sortByAge(req, res) {
    try{
      const orderAnimal = await Animal.findAll({
        order: [["age", "DESC"]],
      })
      res.send(orderAnimal)
    }catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Algo ha fallado al ordenar animales" });
    }
  },

  async sortByAgeAsc(req, res) {
    try{
      const orderAnimal = await Animal.findAll({
        order: [["age", "ASC"]],
      })
      res.send(orderAnimal)
    }catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Algo ha fallado al ordenar animales" });
    }
  }
};

module.exports = AnimalController;
