const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PetPollingResults model
const PetPollingResults = db.define('PetPollingResults', {
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
    month: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    vote_count: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    result: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'pet_polling_results',
    timestamps: false
});

export default PetPollingResults;
