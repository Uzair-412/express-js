// Filename: Vendor.js
const { DataTypes , literal, Op} = require('sequelize');
const db = require('../config/database');
const Reviews = require('./Reviews');
const Products = require('./Products');

const Vendor = db.define('Vendor', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    business_type: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
    },
    user: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
    },
    contact_name: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    alt_email: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    state: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    zip_code: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    timezone: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    country_id: {
        type: DataTypes.MEDIUMINT(7).UNSIGNED,
        allowNull: true,
        defaultValue: 0,
    },
    country: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    site_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    slug: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },
    logo: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    header_image: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    csv_file: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    ship_calc_type: {
        type: DataTypes.ENUM('auto', 'fixed'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    fixed_shipping_fee: {
        type: DataTypes.STRING(16),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    fixed_shipping_service: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    fixed_shipping_type: {
        type: DataTypes.ENUM('Per Order', 'Per Product'),
        allowNull: false,
        defaultValue: 'Per Order',
    },
    weight: {
        type: DataTypes.DOUBLE(8, 2).UNSIGNED,
        allowNull: true,
        defaultValue: 1.00,
    },
    tax_percentage: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    percentage_from_sales: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    publishable_key: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    secret_key: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    client_account_id: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    virtual_booth_url: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    preferred_payment_method: {
        type: DataTypes.ENUM('Bank Transfer', 'Stripe'),
        allowNull: true,
    },
    ups_service: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 0,
    },
    usps_service: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 0,
    },
    fedex_service: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 0,
    },
    flat_shipping_rate: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    flat_shipping_type: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    default_shipping: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    vendor_business_type: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    vendor_type: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    services_seller: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    sp_category_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    sp_rating: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    sp_preferred: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    sp_deal: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    sp_website: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    sp_short_details: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    sp_details: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    sell_from: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    heard_from: {
        type: DataTypes.ENUM('Conference', 'Social Media', 'Vet and Tech', 'Referral'),
        allowNull: true,
    },
    speak_to_representative: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    accept_terms_and_condition: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
    },
    vendor_initials: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    activated_account: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    blocked_account: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    sales_module_access: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    catalog_module_access: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    promotions_module_access: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    jobs_module_access: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    courses_module_access: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 0,
    },
    web_pages_module_access: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    design_module_access: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    account_settings_module_access: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    create_stripe_module_access: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 0,
    },
    service_provider_module_access: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 0,
    },
    support_module_access: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    services_module_access: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 0,
    },
    latitude: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    longitude: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    minimum_order_amount: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    minimum_amount_for_free_shipping: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    delivery_time_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    delivery_time: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    sample_products: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    two_fa_code: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    price_visibility: {
        type: DataTypes.ENUM('Y', 'N', 'A'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb3_general_ci',
    },
    platform: {
        type: DataTypes.ENUM('dvm', 'vetandtech'),
        allowNull: true,
        defaultValue: 'dvm',
    },
    ask_for_pages_content: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 1,
    },
    ask_for_order_status: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 1,
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
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    product_page_meta_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    product_page_meta_keywords: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    product_page_meta_description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    tableName: 'vendors',
    timestamps: false,
});

// associations 
Vendor.associate = () => {
    Vendor.hasMany(Products, {
        foreignKey: 'vendor_id',
        as: 'products'
    });
}



// functions
Vendor.vendorRating = async function(vendor_id) {
    const rating = await Reviews.findOne({
        attributes: [
            [literal('SUM(rating)/COUNT(*) as Rating')] // Average rating calculation
        ],
        include: [{
            model: Products,
            as : 'product',
            where: {
                vendor_id: vendor_id // Filter products by vendor_id
            }
        }],
        where: {
            rating: {
                [Op.ne]: 0 // Rating not equal to 0
            },
            status: 'Y' // Status equals 'Y'
        }
    });
    
    return rating ? rating.Rating : null;
}
Vendor.vendorRatingCounts = async function(vendor_id) {
    try {
        const ratingCounts = await Reviews.count({
            include: [{
                model: Products,
                where: { vendor_id: vendor_id }
            }],
            where: {
                rating: { [Op.ne]: 0 }, // rating != 0
                status: 'Y'
            }
        });

        return ratingCounts;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = Vendor;

