const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the EvFile model
const EvFile = db.define('EvFile', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ev_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('link', 'file'),
        allowNull: true
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    file_name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    is_primary: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
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
        onUpdate: 'CURRENT_TIMESTAMP'
    }
}, {
    tableName: 'ev_files',
    timestamps: false
});

export default EvFile;
