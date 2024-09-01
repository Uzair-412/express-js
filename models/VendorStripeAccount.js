// Filename: VendorStripeAccount.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorStripeAccount = db.define('VendorStripeAccount', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    account_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    account_response: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    vendor: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    person_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    person_response: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    bank_account_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    bank_account_response: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    external_account_response: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    payout_file_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'vendor_stripe_accounts',
    timestamps: false,
});

export default VendorStripeAccount;
