const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProductSamples model
const ProductSamples = db.define('ProductSamples', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    customer_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    vendor_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    is_viewed: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
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
    tableName: 'product_samples',
    timestamps: false
});

export default ProductSamples;
