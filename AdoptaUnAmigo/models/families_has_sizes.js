'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Family_has_size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Family_has_size.init({
    SizeId: DataTypes.INTEGER,
    FamilyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Family_has_size',
  });
  return Family_has_size;
};