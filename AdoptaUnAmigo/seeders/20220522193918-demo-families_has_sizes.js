'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Family_has_sizes', [
    {
    // 1 perro pequeño
      SizeId: '1',
      FamilyId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    // 2 perro mediano
      SizeId: '2',
      FamilyId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    // 3 perro grande
      SizeId: '3',
      FamilyId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    // 4 gato pequeño
      SizeId: '1',
      FamilyId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    // 5 gato mediano
      SizeId: '2',
      FamilyId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    // 6 pájaro pequeño
      SizeId: '1',
      FamilyId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    // 7 pájaro mediano
      SizeId: '2',
      FamilyId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    // 8 lagarto pequeño
      SizeId: '1',
      FamilyId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    // 9 lagarto mediano
      SizeId: '2',
      FamilyId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    // 10 pez pequeño
      SizeId: '1',
      FamilyId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    // 11 pato mediano
      SizeId: '2',
      FamilyId: '6',
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
