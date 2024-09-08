const { DataTypes,Op } = require('sequelize');
const db = require('../config/database');
const Category = require('./Category');


const BusinessType = db.define('BusinessTypes', {
    id: {
        type: DataTypes.BIGINT(19),
        autoIncrement: true,
        primaryKey: true,
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
        type: DataTypes.STRING(191),
        allowNull: true
    },
    long_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    icon_code: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    icon_image: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    regular_image: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    display_position: {
        type: DataTypes.BIGINT(19),
        allowNull: true
    },
    show_in_main_menu: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    show_in_home_page: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    meta_title: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    meta_keywords: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    meta_description: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'business_type',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Adding static method to find subcategories
BusinessType.getSubCategories = async function(business_type) {
    return await Category.findAll({
        where: {
            slug: {
                [Op.like]: `%${business_type.slug}%`  // Perform 'LIKE' query on slug
            },
            status: 'Y'
        },
        attributes: [
            'id', 'business_type', 'parent_id', 'name', 'slug',
            'meta_title', 'meta_description', 'meta_keywords',
            'image', 'status', 'display_mode', 'position'
        ]
    });
};

module.exports = BusinessType;
