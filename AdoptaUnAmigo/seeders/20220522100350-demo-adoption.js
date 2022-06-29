'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Adoptions', [
      {
      date: '2022-04-01',
      UserId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2022-01-01',
      UserId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2021-08-01',
      UserId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2020-04-04',
      UserId: '5',
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
