const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Products model
const Products = db.define('Products', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    vendor_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    business_type: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    parent_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    type: {
        type: DataTypes.ENUM('simple', 'variation', 'child'),
        allowNull: false,
        defaultValue: 'simple',
        collate: 'utf8mb4_unicode_ci'
    },
    shipping_type: {
        type: DataTypes.ENUM('miles', 'place', 'anywhere'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    shipping_miles: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    level: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 1
    },
    family: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    name: {
        type: DataTypes.STRING(191),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    caption: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    caption_type: {
        type: DataTypes.ENUM('Select the size and color you want to order', 'Select the size you want to order', 'Select the color you want to order'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    slug: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    sku: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    sku_stripped: {
        type: DataTypes.STRING(191),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    sku_variations: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    wholesale_price: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    price: {
        type: DataTypes.DOUBLE(9, 2),
        allowNull: true
    },
    price_range_min: {
        type: DataTypes.DOUBLE(9, 2),
        allowNull: true
    },
    price_range_max: {
        type: DataTypes.DOUBLE(9, 2),
        allowNull: true
    },
    price_catalog: {
        type: DataTypes.DOUBLE(9, 2),
        allowNull: true
    },
    price_discounted: {
        type: DataTypes.DOUBLE(9, 2),
        allowNull: true
    },
    price_discounted_start: {
        type: DataTypes.DATE,
        allowNull: true
    },
    price_discounted_end: {
        type: DataTypes.DATE,
        allowNull: true
    },
    vendor_product_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    in_stock: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_unicode_ci'
    },
    check_quantity: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    quantity: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    max_quantity_threshold: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    minimum_order: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 0
    },
    on_allocation: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    no_of_days: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    ship_type: {
        type: DataTypes.ENUM('intl', 'us'),
        allowNull: true,
        defaultValue: 'intl',
        collate: 'utf8mb4_unicode_ci'
    },
    ship_calc_type: {
        type: DataTypes.ENUM('auto', 'fixed'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    fixed_shipping_fee: {
        type: DataTypes.STRING(16),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    length: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    width: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    height: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    distance_unit: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: 'in',
        collate: 'utf8mb4_unicode_ci'
    },
    weight: {
        type: DataTypes.DOUBLE(8, 2).UNSIGNED,
        allowNull: true,
        defaultValue: 1.00
    },
    mass_unit: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: 'kg',
        collate: 'utf8mb4_unicode_ci'
    },
    taxable: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    short_description: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    full_description: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    additional_information: {
        type: DataTypes.JSON,
        allowNull: true
    },
    pdf_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    video_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    video_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    related_products: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    upsell_products: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    cross_sell_products: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    tags: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    competitor_skus: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    visibility: {
        type: DataTypes.ENUM('1', '2', '3', '4'),
        allowNull: true,
        defaultValue: '1',
        collate: 'utf8mb4_unicode_ci'
    },
    featured: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    hot: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    new: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    deals_of_the_day: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    position: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_unicode_ci'
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    resized: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    image_org: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: 'no_selection',
        collate: 'utf8mb4_unicode_ci'
    },
    image_updated: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    views: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    sales: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    banner_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    faq_set_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    is_set: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    is_canonical: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    show_individual: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    link_type: {
        type: DataTypes.ENUM('simple', 'variation'),
        allowNull: true,
        defaultValue: 'variation',
        collate: 'utf8mb4_unicode_ci'
    },
    canonical_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    engravable: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    engraving_price: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    do_index: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_unicode_ci'
    },
    sub_hash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0',
        comment: 'Will store hash value combining the child skus',
        collate: 'utf8mb4_unicode_ci'
    },
    warranty: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    schema: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
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
    tableName: 'products',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default Products;
