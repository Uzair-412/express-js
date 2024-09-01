const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the EventVendor model
const EventVendor = db.define('EventVendor', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    event_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    vendor_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    categories: {
        type: DataTypes.STRING(32),
        allowNull: false,
        defaultValue: ''
    },
    display_name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    company_intro: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    mobile: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    website: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    street: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    state: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    zip: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    country: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    image_logo: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    image_cover: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    image_background: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    access_code: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    access_hash: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    is_featured: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    fee_paid: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
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
        onUpdate: 'CURRENT_TIMESTAMP'
    }
}, {
    tableName: 'event_vendors',
    timestamps: false
});

export default EventVendor;
