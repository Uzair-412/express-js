const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Coupon model
const Coupon = db.define('Coupon', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb4_unicode_ci'
    },
    coupon: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    products: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: null
    },
    uses_per_customer: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    group_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    date_from: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
    },
    date_to: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
    },
    free_shipping: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'latin1_swedish_ci'
    },
    free_shipping_countries: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    showcase: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'latin1_swedish_ci'
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    type: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    discount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    course_discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    courses: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    coupon_type: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 9
    },
    items_buy: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    buy_skus: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    items_get: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    get_skus: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'latin1_swedish_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'coupons',
    timestamps: false
});

export default Coupon;
