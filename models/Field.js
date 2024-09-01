const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Field model
const Field = db.define('Field', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    field_set_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    placeholder: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    placeholder_2: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    options: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    required: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false
    },
    position: {
        type: DataTypes.BIGINT,
        allowNull: false
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
    tableName: 'fields',
    timestamps: false
});

export default Field;
