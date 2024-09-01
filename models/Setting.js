const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Setting model
const Setting = db.define('Setting', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    key_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        unique: true
    },
    key_value: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    key_group: {
        type: DataTypes.STRING(32),
        allowNull: true
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
    tableName: 'settings',
    timestamps: false,
    collate: 'latin1_swedish_ci'
});

export default Setting;
