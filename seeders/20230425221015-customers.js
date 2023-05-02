'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('customers', [{
       firstname: 'John Doe',
       lastname: 'John Doe',
       city: 'John Doe',
       state: 'John Doe',
       number: 'John Doe',
       gender: 'John Doe',
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
