const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Service model
const Service = db.define('Service', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(63),
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    short_description: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    full_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    guide: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    disclaimers: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    meta_title: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'services',
    timestamps: false,
});

export default Service;
