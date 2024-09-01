const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProductCart model
const ProductCart = db.define('ProductCart', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    customer_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    product_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    service_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    plan_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    number_of_license: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    checked: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    price_with_coupon: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    vendor_checked: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'product_cart',
    timestamps: false
});

export default ProductCart;
