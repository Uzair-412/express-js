const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PushNotifications model
const PushNotifications = db.define('PushNotifications', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    platform: {
        type: DataTypes.ENUM('Broadcast', 'One-Device'),
        allowNull: true
    },
    device: {
        type: DataTypes.ENUM('Web', 'Android', 'Apple'),
        allowNull: true
    },
    delivery_type: {
        type: DataTypes.ENUM('Immediately', 'Scheduled'),
        allowNull: true
    },
    date: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    response: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    flag: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'push_notifications',
    timestamps: false
});

export default PushNotifications;
