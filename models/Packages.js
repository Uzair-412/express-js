const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Packages model
const Packages = db.define('Packages', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    no_of_products: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    no_of_monthly_deals: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    discount_coupons_module: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    tableName: 'packages',
    timestamps: false
});

export default Packages;
