const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Orderitems model
const Orderitems = db.define('Orderitems', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    vendor_order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    vendor_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    customer_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    sku: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    price: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true
    },
    price_original: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    bogo: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    image: {
        type: DataTypes.STRING(255),
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
    tableName: 'orderitems',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default Orderitems;
