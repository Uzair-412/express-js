const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProductsSets model
const ProductsSets = db.define('ProductsSets', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    variation_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    product_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    qty: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 1
    },
    pos: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
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
    tableName: 'products_sets',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default ProductsSets;
