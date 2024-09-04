const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Event model
const Events = db.define('Events', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true
    },
    short_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    full_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    attendee_registration_fee: {
        type: DataTypes.DOUBLE(8, 2),
        allowNull: true
    },
    exhibitor_registration_fee: {
        type: DataTypes.DOUBLE(8, 2),
        allowNull: true
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    video: {
        type: DataTypes.STRING(255),
        allowNull: true
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
    show_in_vendor: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('live', 'virtual', 'hybrid'),
        defaultValue: 'virtual',
        allowNull: true
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    state: {
        type: DataTypes.STRING(2),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
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
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'events',
    timestamps: false
});

module.exports = Events;
