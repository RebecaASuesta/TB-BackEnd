'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Family extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Family.hasMany(models.Animal)
      Family.belongsToMany(models.Size,{
        through:models.Family_has_size
      })
    }
  }
  Family.init({
    species_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Family',
  });
  return Family;
};