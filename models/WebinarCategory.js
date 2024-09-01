// Filename: WebinarCategory.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const WebinarCategory = db.define('WebinarCategory', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    category: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb3_general_ci',
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'Y',
        collate: 'utf8mb3_general_ci',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'webinar_categories',
    timestamps: false,
});

export default WebinarCategory;
