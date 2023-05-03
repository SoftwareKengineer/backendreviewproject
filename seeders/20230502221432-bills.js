'use strict';
// const {bill} = require("../models")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'bill', [{
        billingamount: '29.99',
        numberofminutes: '120',
        numberoftexts: 300,
        datamountused: 5,
        outgoingcalls: 50,
        customerid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        billingamount: '29.99',
        numberofminutes: '120',
        numberoftexts: 300,
        datamountused: 5,
        outgoingcalls: 50,
        customerid: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
     }], {})
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
