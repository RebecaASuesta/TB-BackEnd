'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Families', [
      {
      species_name: 'Perro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species_name: 'Gato',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species_name: 'Pájaro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species_name: 'Lagarto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species_name: 'Pez',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species_name: 'Pato',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
