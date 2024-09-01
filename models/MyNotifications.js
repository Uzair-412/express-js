const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the MyNotifications model
const MyNotifications = db.define('MyNotifications', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    response: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    seen: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
    },
    flag: {
        type: DataTypes.INTEGER,
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
    tableName: 'my_notifications',
    timestamps: false
});

export default MyNotifications;
