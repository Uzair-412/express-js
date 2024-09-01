const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProductFacts model
const ProductFacts = db.define('ProductFacts', {
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
    vendor_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('Ingredient', 'Package Type', 'Species', 'Uses', 'Brand Name', 'Category'),
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
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
    tableName: 'product_facts',
    timestamps: false
});

export default ProductFacts;
