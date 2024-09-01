const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProductsProducts model
const ProductsProducts = db.define('ProductsProducts', {
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
    sub_product_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
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
    tableName: 'products_products',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default ProductsProducts;
