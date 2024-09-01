const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProductShippingCountry model
const ProductShippingCountry = db.define('ProductShippingCountry', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    shipping_country_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
    },
    shipping_state_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    shipping_zip_code: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    shipping_city: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    product_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
    }
}, {
    tableName: 'product_shipping_country',
    timestamps: false
});

export default ProductShippingCountry;
