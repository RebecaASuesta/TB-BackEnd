'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adoption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adoption.belongsTo(models.User)
      Adoption.hasMany(models.Animal)
    }
  }
  Adoption.init({
    date: DataTypes.DATEONLY,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Adoption',
  });
  return Adoption;
};