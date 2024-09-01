const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Levels model
const Levels = db.define('Levels', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'levels',
    timestamps: false
});

export default Levels;
