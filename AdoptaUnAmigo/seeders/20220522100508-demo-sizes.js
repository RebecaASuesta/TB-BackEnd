'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Sizes', [
      {
      size: 'Pequeño',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      size: 'Mediano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      size: 'Grande',
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
