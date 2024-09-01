const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PricingPlans model
const PricingPlans = db.define('PricingPlans', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    service_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    type: {
        type: DataTypes.ENUM('monthly', 'quarterly', 'biannually', 'yearly'),
        allowNull: false,
    },
    fee: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    additional_fee: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    equipment_fee: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    terms_and_conditions: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
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
    tableName: 'pricing_plans',
    timestamps: false
});

export default PricingPlans;
