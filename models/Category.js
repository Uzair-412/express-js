const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Products = require('./Products');
const CategoryProduct = require('./CategoryProduct');

const Category = db.define('Category', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    business_type: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    parent_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(191),
        allowNull: false,
        unique: true
    },
    short_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    meta_title: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    meta_keywords: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    meta_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    display_mode: {
        type: DataTypes.ENUM('products_and_description', 'products_only', 'description_only'),
        allowNull: false
    },
    show_prices: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    banner_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    show_in_menu: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false
    },
    is_main: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    is_featured: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    is_canonical: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    canonical_url: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    do_index: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    position: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('custom', 'old'),
        allowNull: false,
        defaultValue: 'old'
    },
    checked_by: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'Y'
    },
    schema: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'categories',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});



Category.belongsToMany(Products, { 
    as: 'products',            // Alias for the relationship
    through: CategoryProduct,   // Join table model
    foreignKey: 'category_id',  // Foreign key for Category in the join table
    otherKey: 'product_id'      // Foreign key for Product in the join table
});


module.exports = Category;