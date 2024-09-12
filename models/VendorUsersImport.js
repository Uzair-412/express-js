// Filename: VendorUsersImport.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorUsersImport = db.define('VendorUsersImport', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    vendor_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
    },
    csv_file: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    user_email: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    already_register: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    show_price: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    email_sent: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    last_mail_sent: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    customer_request_mail: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'vendor_users_imports',
    timestamps: false,
});

module.exports = VendorUsersImport
