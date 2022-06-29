'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Animal.belongsTo(models.Adoption);
      Animal.belongsTo(models.Family);
    }
  }
  Animal.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor, introduce el nombre del animal",
        },
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor, introduce el sexo del animal",
        },
      },
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor, introduce la edad del animal",
        },
      },
    },
    AdoptionId: DataTypes.INTEGER,
    FamilyId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor, introduce la especie del animal",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};