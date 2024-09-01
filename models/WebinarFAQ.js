// Filename: WebinarFAQ.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const WebinarFAQ = db.define('WebinarFAQ', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    webinar_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    question: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci',
    },
    answer: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci',
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_unicode_ci',
    },
    date: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    created_at: {
        type: DataTypes.DATETIME,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'webinar_faqs',
    timestamps: false,
});

export default WebinarFAQ;
