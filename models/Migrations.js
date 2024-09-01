const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Migrations model
const Migrations = db.define('Migrations', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    migration: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    batch: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'migrations',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default Migrations;
