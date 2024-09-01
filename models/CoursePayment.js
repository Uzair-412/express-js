const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CoursePayment model
const CoursePayment = db.define('CoursePayment', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    customer_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    amount: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true
    },
    card_number: {
        type: DataTypes.STRING(4),
        allowNull: true
    },
    card_holder_name: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    card_type: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    transaction_id: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    balance_transaction: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    payment_method: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    receipt_url: {
        type: DataTypes.TEXT,
        allowNull: true
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
    tableName: 'course_payments',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default CoursePayment;
