'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const bcrypt = require ('bcryptjs');
    return queryInterface.bulkInsert ( 'Users', [
      {
      name: 'Oriol',
      email: 'oriol@yahoo.es',
      password: bcrypt.hashSync('rebeca',10),
      role:'superadmin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sharpay Evans',
      email: 'Sharpay@hsm.com',
      password: bcrypt.hashSync('diva',10),
      role:'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Troy Bolton',
      email: 'Troy@hsm.com',
      password: bcrypt.hashSync('bolton',10),
      role:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Gabriela Montes',
      email: 'gabriela@hsm.com',
      password: bcrypt.hashSync('montes',10),
      role:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ryan Evans',
      email: 'notsharpay@hsm.com',
      password: bcrypt.hashSync('diva2',10),
      role:'user',
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
