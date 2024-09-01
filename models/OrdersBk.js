const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the OrdersBk model
const OrdersBk = db.define('OrdersBk', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        primaryKey: true
    },
    parent_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    vendor_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true
    },
    customer_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    first_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    last_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    company: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    address1: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    address2: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    country: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    city: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    zip_code: {
        type: DataTypes.STRING(20),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    phone: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    sub_total: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true
    },
    shipping_fee: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true
    },
    discount: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true
    },
    tax: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true
    },
    grand_total: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true
    },
    shipping_service: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    discount_coupon: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    order_status: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 1
    },
    order_from: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: 'web',
        collate: 'latin1_swedish_ci'
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
    ups_tracking_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    utm_code: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    site_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    hash: {
        type: DataTypes.STRING(64),
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
    tableName: 'orders_bk',
    timestamps: false
});

export default OrdersBk;
