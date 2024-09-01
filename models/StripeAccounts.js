// Filename: StripeAccounts.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const StripeAccounts = db.define('StripeAccounts', {
    id: {
        type: DataTypes.INT(10),
        primaryKey: true,
        autoIncrement: true,
    },
    vendor_id: {
        type: DataTypes.INT(10),
        allowNull: false,
    },
    stripe_account_email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    stripe_account_no: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    exis_stripe_account_no: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    access_token: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    details_submitted: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 0,
    },
    is_deleted: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 0,
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
    tableName: 'stripe_accounts',
    timestamps: false,
});

export default StripeAccounts;
