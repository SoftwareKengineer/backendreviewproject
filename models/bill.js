'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    // bill.belongsTo(models.customers)
    static associate(models) {
      this.belongsTo(models.customers, {
        foreignKey: 'customerid'
      });
    }
  }
  bill.init({
    billingamount: DataTypes.STRING,
    numberofminutes: DataTypes.STRING,
    numberoftexts: DataTypes.INTEGER,
    datamountused: DataTypes.INTEGER,
    outgoingcalls: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bill',
  });
  return bill;
};