const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PetBadgePayments model
const PetBadgePayments = db.define('PetBadgePayments', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    complete_address: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    user_pet_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    amount: {
        type: DataTypes.TINYINT,
        allowNull: true
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
        type: DataTypes.STRING(128),
        allowNull: true,
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
    tableName: 'pet_badge_payments',
    timestamps: false
});

export default PetBadgePayments;
