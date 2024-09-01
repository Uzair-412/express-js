const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Messages model
const Messages = db.define('Messages', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    customer_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    type: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    subject: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'messages',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default Messages;
