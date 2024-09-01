const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the SearchavetListingProducts model
const SearchavetListingProducts = db.define('SearchavetListingProducts', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    product_ids: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'Y'
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
    tableName: 'searchavet_listing_products',
    timestamps: false
});

export default SearchavetListingProducts;
