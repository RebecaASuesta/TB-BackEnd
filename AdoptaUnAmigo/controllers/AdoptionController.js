const { Adoption, Animal, User, Family, Size } = require("../models/index.js");

const AdoptionController = {
  async create(req, res) {
    try {
      await Adoption.create({ ...req.body });
      const adoption = res
        .status(201)
        .send({ message: "Adopción registrada con éxito", Adoption });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema al crear la adopcion",
      });
    }
  },

  async getAll(req, res) {
    try {
      const adoptions = await Adoption.findAll({
        include: [
          {
            model: Animal,
            include: [
              {
                model: Family,
                attributes: ["species_name"],
                include: [
                  {
                    model: Size,
                    attributes: ["size"],
                    through: { attributes: [] },
                  },
                ],
              },
            ],
          },
          { model: User },
        ],
      });
       res.send(adoptions);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema al cargar las adopciones",
      });
    }
  },

  async getById(req, res) {
    try {
      const adoption = await Adoption.findByPk(req.params.id);
      res.send(adoption);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema buscar las adopciones",
      });
    }
  },

  async updateById(req, res) {
    try {
      await Adoption.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      const adoption = res.send("Adopción actualizada con éxito");


    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Ha habido un problema al actualizar la adopcion" });
    }
  },

  async deleteById(req, res) {
    try {
      await Adoption.destroy({
        where: {
          id: req.params.id,
        },
      });
      const adoption = res.send("La adopción  ha sido borrada con éxito");
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Ha habido un problema al borrar la adopcion" });
    }
  }
};

module.exports = AdoptionController;
