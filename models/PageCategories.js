const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PageCategories model
const PageCategories = db.define('PageCategories', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    category: {
        type: DataTypes.STRING(200),
        allowNull: false,
        collate: 'utf8mb3_general_ci'
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'Y',
        collate: 'utf8mb3_general_ci'
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
    tableName: 'page_categories',
    collate: 'utf8mb3_general_ci',
    timestamps: false
});

export default PageCategories;
