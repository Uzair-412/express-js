const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Invoice model
const Invoice = db.define('Invoice', {
    id: {
        type: DataTypes.BIGINT,
        unsigned: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ref_type: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null
    },
    ref_id: {
        type: DataTypes.INTEGER,
        unsigned: true,
        allowNull: true,
        defaultValue: null
    },
    customer_id: {
        type: DataTypes.INTEGER,
        unsigned: true,
        allowNull: true,
        defaultValue: null
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null
    },
    invoice_number: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
        unique: true
    },
    amount: {
        type: DataTypes.FLOAT,
        unsigned: true,
        allowNull: true,
        defaultValue: null
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    },
    late_fee_type: {
        type: DataTypes.ENUM('none', 'flat', 'percentage'),
        allowNull: true,
        defaultValue: 'none'
    },
    late_fee: {
        type: DataTypes.FLOAT,
        unsigned: true,
        allowNull: true,
        defaultValue: null
    },
    status: {
        type: DataTypes.TINYINT,
        unsigned: true,
        allowNull: true,
        defaultValue: 0
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
    tableName: 'invoices',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default Invoice;
