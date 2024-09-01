// Filename: VendorContentPayment.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorContentPayment = db.define('VendorContentPayment', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    video_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    course_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    amount: {
        type: DataTypes.DOUBLE(8, 2),
        allowNull: true,
    },
    card_number: {
        type: DataTypes.STRING(4),
        allowNull: true,
    },
    card_type: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    transaction_id: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    balance_transaction: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    payment_method: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    receipt_url: {
        type: DataTypes.TEXT,
        allowNull: true,
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
    tableName: 'vendor_content_payments',
    timestamps: false,
});

export default VendorContentPayment;
