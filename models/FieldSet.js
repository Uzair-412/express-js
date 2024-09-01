const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the FieldSet model
const FieldSet = db.define('FieldSet', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    business_type: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    icon_image: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    display_position: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
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
    tableName: 'field_sets',
    timestamps: false
});

export default FieldSet;
