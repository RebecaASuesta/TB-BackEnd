const { Family, Size, Family_has_size,Animal, Sequelize} = require("../models/index.js");
const { Op } = Sequelize;

const FamilyController = {
  async create(req, res) {
    try {
      const family = await Family.create({ ...req.body });
      family.addSize(req.body.SizeId);
      res.status(201).send({ message: "Especie registrada con éxito", family });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema al crear la adopcion",
      });
    }
  },

  async getAll(req, res) {
    try {
      const family = await Family.findAll({
        include: [
          { model: Size, attributes: ["size"], through: { attributes: [] } },
        ],
      });
      res.send(family);
    } catch {
      (err) => {
        console.log(err);
        res
          .status(500)
          .send({ message: "Ha habido un problema al cargar las especies" });
      };
    }
  },
  
  async getById(req, res) {
    try {
      const family = await Family.findByPk(req.params.id);
      res.send(family);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema buscar la especie",
      });
    }
  },

  async getByName(req, res) {
    try {
      const family = await Family.findAll({
        where: {
          species_name: {
            [Op.like]: `%${req.params.name}%`,
          },
        },
      });
      if (family.length === 0) {
        res.status(200).send({
          message: "No hemos encontrado ninguna especie con este nombre",
        });
      } else {
        res.send(family);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: "Algo ha fallado al buscar la especie" });
    }
  },

  async getFamiliesBySize(req, res) {
    try {
      const sizes = await Size.findAll({
        include: [{ model: Family, through: { attributes: [] } }],
        where: {
          id: req.params.id,
        },
      });
      res.send(sizes);
    } catch {
      (err) => {
        console.log(err);
        res.status(500).send({
          message:
            "Ha habido un problema al cargar las especies del tamaño indicado",
        });
      };
    }
  },
  async getById(req, res) {
    try {
      const family = await Family.findByPk(req.params.id,{ include:[Animal]} );


      res.send(family);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema buscar la especie",
      });
    }
  },
  async updateById(req, res) {
    try {
      const family = await Family.findByPk(req.params.id)
      family.update({...req.body})
      res.send({ message:"Especie actualizada con éxito",family});
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Ha habido un problema al actualizar la especie" });
    }
  },

  async deleteById(req, res) {
    try {
      const family = await Family.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send("La especie ha sido borrada con éxito");
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema al borrar la especie",
      });
    }
  }
};

module.exports = FamilyController;

// Podría ser algo similar para indicar que ha encontrado algún resultado?

// const found = members.some((member) => member.id === +req.params.id); // devuelve true o false
//   console.log(found);
//   if (found) {
//     res.send(members.filter((member) => member.id === +req.params.id));
//   } else {
//     res.status(404).send(`Member with id ${req.params.id} not found`);
//   }
