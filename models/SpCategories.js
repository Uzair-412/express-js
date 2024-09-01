// Filename: SpCategories.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const SpCategories = db.define('SpCategories', {
    id: {
        type: DataTypes.INT(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    slug: {
        type: DataTypes.STRING(128),
        allowNull: true,
        unique: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    meta_description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'Y',
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'sp_categories',
    timestamps: false,
});

export default SpCategories;
