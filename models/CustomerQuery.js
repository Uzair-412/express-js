const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CustomerQuery model
const CustomerQuery = db.define('CustomerQuery', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    subject: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    company: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    viewed: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    replied: {
        type: DataTypes.TINYINT,
        allowNull: false,
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
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'customer_queries',
    timestamps: false
});

export default CustomerQuery;
