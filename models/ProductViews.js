const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProductViews model
const ProductViews = db.define('ProductViews', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false
    },
    service_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    vendor_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: true
    },
    customer_id: {
        type: DataTypes.BIGINT(19),
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('view', 'impression'),
        allowNull: false
    },
    section: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    ip_address: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    browser: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    operating_system: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    user_agent: {
        type: DataTypes.STRING(191),
        allowNull: false
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
    tableName: 'product_views',
    timestamps: false
});

export default ProductViews;
