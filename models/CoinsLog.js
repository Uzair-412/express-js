
const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CoinsLog model
const CoinsLog = db.define('CoinsLog', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    coins: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    source_page: {
        type: DataTypes.ENUM(
            'product-detail',
            'vendor-listing',
            'product-review',
            'login',
            'checkout',
            'service-detail'
        ),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('pending', 'used', 'expired'),
        allowNull: false,
        defaultValue: 'pending'
    },
    conversion: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    expired_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
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
    tableName: 'coins_logs',
    timestamps: false
});

export default CoinsLog;
