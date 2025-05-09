const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  amountPaid: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  timestamps: false // Disable createdAt and updatedAt columns
});

module.exports = Payment;
