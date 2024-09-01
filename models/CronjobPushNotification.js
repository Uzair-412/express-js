const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CronjobPushNotification model
const CronjobPushNotification = db.define('CronjobPushNotification', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    clickable_link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    response: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    user_ids: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    flag: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'cronjob_push_notifications',
    timestamps: false
});

export default CronjobPushNotification;
