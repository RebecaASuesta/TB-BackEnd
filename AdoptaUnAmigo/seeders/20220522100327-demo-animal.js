'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Animals', [
      {
      name: 'Kourtney',
      gender: 'hembra',
      age: '4 años',
      // adoptionId: 'null',
      FamilyId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kim',
      gender: 'hembra',
      age: '3 años',
      adoptionId: '3',
      FamilyId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Khloe',
      gender: 'hembra',
      age: '2 años',
      adoptionId: '4',
      FamilyId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kendall',
      gender: 'hembra',
      age: '1 años',
      // adoptionId: 'null',
      FamilyId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kylie',
      gender: 'hembra',
      age: '1 años',
      adoptionId: '2',
      FamilyId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Stormy',
      gender: 'hembra',
      age: '7 años',
      // adoptionId: 'null',
      FamilyId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Scott',
      gender: 'macho',
      age: '3 años',
       adoptionId: '3',
      FamilyId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kanye',
      gender: 'macho',
      age: '2 años',
      adoptionId: '1',
      FamilyId: '2',
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
