// Filename: Subscriptions.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Subscriptions = db.define('Subscriptions', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    stripe_subscription_id: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    payment_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    order_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    customer_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    plan_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    plan_cost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    additional_licence_cost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    equipment_fee: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    total_amount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    next_billing_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    no_of_licence: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    plan_type: {
        type: DataTypes.ENUM('one time', 'recurring'),
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('active', 'canceled', 'expired'),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'subscriptions',
    timestamps: false,
});

export default Subscriptions;
