const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Payments model
const Payments = db.define('Payments', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ref_type: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    ref_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    discount: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    card_number: {
        type: DataTypes.STRING(4),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    card_type: {
        type: DataTypes.STRING(16),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    transaction_id: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    balance_transaction: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    payment_method: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    receipt_url: {
        type: DataTypes.TEXT,
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
    tableName: 'payments',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default Payments;
