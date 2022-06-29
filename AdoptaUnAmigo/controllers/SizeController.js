const { Size} = require('../models/index.js');

const SizeController = {
  async create(req, res) {
    try {
      await Size.create({...req.body });
      const size = res
        .status(201)
        .send({ message: 'Tamaño registrado con éxito', Size })
    } catch (err) {
      console.log(err);
    }
  },
  
  async getAll (req, res) {
    try {
      const sizes = await Size.findAll({});
      console.log(sizes)
      res.send(sizes);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Ha habido un problema al cargar los tamaños"
      });
    }
  }
}

module.exports = SizeController