const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Notifications model
const Notifications = db.define('Notifications', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    customer_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    order_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    invoice_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    order_status: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    on_hold_reason: {
        type: DataTypes.STRING(256),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    cancel_reason: {
        type: DataTypes.STRING(256),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    subject: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    notification_message: {
        type: DataTypes.STRING(256),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    email_sent: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    viewed: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 0
    },
    dismissed: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'latin1_swedish_ci'
    },
    alert_type: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: 'success',
        collate: 'latin1_swedish_ci'
    },
    redirect_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'notifications',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default Notifications;
