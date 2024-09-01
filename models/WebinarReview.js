// Filename: WebinarReview.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const WebinarReview = db.define('WebinarReview', {
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
        allowNull: false,
        collate: 'utf8mb4_unicode_ci',
    },
    reviews: {
        type: DataTypes.TEXT,
        allowNull: false,
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
    tableName: 'webinar_reviews',
    timestamps: false,
});

export default WebinarReview;
