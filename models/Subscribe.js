// Filename: Subscribe.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Subscribe = db.define('Subscribe', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    speciality: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    role: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    company: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    product_updates: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
    },
    newsletter: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
    },
    unsubscribed: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    verified: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    code: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    source: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: 'footer-subscribe',
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
    tableName: 'subscribe',
    timestamps: false,
});

export default Subscribe;
