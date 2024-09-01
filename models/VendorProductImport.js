// Filename: VendorProductImport.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorProductImport = db.define('VendorProductImport', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    vendor_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
    },
    categories: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    csv_file: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    zip_file: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    products: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0,
    },
    message: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    completed_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'vendor_product_imports',
    timestamps: false,
});

export default VendorProductImport;
