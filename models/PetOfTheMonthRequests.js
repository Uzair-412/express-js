const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PetOfTheMonthRequests model
const PetOfTheMonthRequests = db.define('PetOfTheMonthRequests', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pet_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    approved_by_admin: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        defaultValue: '0',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'pet_of_the_month_requests',
    timestamps: false
});

export default PetOfTheMonthRequests;
