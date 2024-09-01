// Filename: Wishlist.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Wishlist = db.define('Wishlist', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    customer_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    service_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        defaultValue: '1',
        collate: 'utf8mb4_unicode_ci',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'wishlists',
    timestamps: false,
});

export default Wishlist;
