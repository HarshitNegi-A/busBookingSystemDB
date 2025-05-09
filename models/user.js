const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false // Disable Sequelize automatic timestamps
});


module.exports = User;
