'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('customers', [{
       firstname: 'Stephen TA',
       lastname: 'Is Awesome',
       city: 'Houston',
       state: 'Texas',
       number: '123456789',
       gender: 'Alpha Male',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      firstname: 'Dez TA',
      lastname: 'Is Awesome',
      city: 'Woodstock',
      state: 'Georgia',
      number: '987654321',
      gender: 'Alpha Female',
      createdAt: new Date(),
        updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
