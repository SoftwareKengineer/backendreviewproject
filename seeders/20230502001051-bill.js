'use strict';
const {bill} = require("../models")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await bill.create({
      billingamount: '29.99',
      numberofminutes: '120',
      numberoftexts: 300,
      datamountused: 5,
      outgoingcalls: 50,
      customerid: 1, 
    });
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
