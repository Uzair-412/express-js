const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Products = require('./Products'); // Import the Products model
const CategoryProduct = require('./CategoryProduct'); // Assuming this is the join table model

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
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    meta_title: {
        type: DataTypes.TEXT
    },
    meta_keywords: {
        type: DataTypes.TEXT
    },
    meta_description: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.STRING(255),
        defaultValue: null
    },
    display_mode: {
        type: DataTypes.ENUM('products_and_description', 'products_only', 'description_only'),
        allowNull: false
    },
    show_prices: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'N'
    },
    banner_id: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    show_in_menu: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false
    },
    is_main: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'Y'
    },
    is_featured: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'Y'
    },
    is_canonical: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'N'
    },
    canonical_url: {
        type: DataTypes.STRING(255),
        defaultValue: null
    },
    do_index: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'Y'
    },
    position: {
        type: DataTypes.BIGINT.UNSIGNED,
        defaultValue: null
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
        type: DataTypes.TEXT
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: null
    }
}, {
    tableName: 'categories',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Self-referential relationship for parent-child categories
Category.belongsTo(Category, { as: 'parent', foreignKey: 'parent_id' });

Category.associate = (models) => {
    Category.belongsToMany(models.Products, { through: 'CategoryProduct' });
};

module.exports = Category;
