const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Bus = sequelize.define('Bus', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    busNumber: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Ensure a valid default value
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Ensure a valid default value
    }
});

module.exports = Bus;
