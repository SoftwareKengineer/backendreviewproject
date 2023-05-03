'use strict';

// const { FOREIGNKEYS } = require('sequelize/types/query-types');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bill', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      billingamount: {
        type: Sequelize.STRING
      },
      numberofminutes: {
        type: Sequelize.STRING
      },
      numberoftexts: {
        type: Sequelize.INTEGER
      },
      datamountused: {
        type: Sequelize.INTEGER
      },
      outgoingcalls: {
        type: Sequelize.INTEGER
      },
      customerid:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    },
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('bill');
    }
  };






// this is unused code first try
// //     up: async (queryInterface, Sequelize) => {
// //       await queryInterface.addColumn('bill', 'customerId', {
// //         type: Sequelize.INTEGER,
// //         allowNull: false,
// //         references: {
// //           model: 'customers',
// //           key: 'id'
// //         }
// //       });
// //     },
// //   },
// //   down:async (queryInterface, Sequelize) =>{
// //     await queryInterface.dropTable('bills');
// //   }
// // };


// // 'use strict';

// // module.exports = {
// //   up: async (queryInterface, Sequelize) => {
// //     await queryInterface.addColumn('bill', 'customerId', {
// //       type: Sequelize.INTEGER,
// //       allowNull: false,
// //       references: {
// //         model: 'customers',
// //         key: 'id'
// //       }
// //     });
// //   },

// //   down: async (queryInterface, Sequelize) => {
// //     await queryInterface.removeColumn('bill', 'customerId');
// //   }
// // };