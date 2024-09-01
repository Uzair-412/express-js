const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PushNotificationByUsers model
const PushNotificationByUsers = db.define('PushNotificationByUsers', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    clickable_link: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    response: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    flag: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    seen: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'push_notification_by_users',
    timestamps: false
});

export default PushNotificationByUsers;
