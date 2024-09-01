const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the NotificationDeviceTokens model
const NotificationDeviceTokens = db.define('NotificationDeviceTokens', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    token: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('Web', 'Android', 'Apple'),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    tableName: 'notification_device_tokens',
    timestamps: false
});

export default NotificationDeviceTokens;
