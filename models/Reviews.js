const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Products = require('./Products'); // Ensure the Products model is correctly imported

// Define the Reviews model
const Reviews = db.define('Reviews', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    customer_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    product_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: true
    },
    service_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    mobile: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    video: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    rating: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    type: {
        type: DataTypes.ENUM('testimonial', 'product_review'),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    purchased: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    vendor_approved: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    admin_approved: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
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
    tableName: 'reviews',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

// Define the association with Products
Reviews.associate = () => {
        Reviews.belongsTo(Products, {
        foreignKey: 'product_id', // Foreign key in Review model
        as: 'product' // Alias for the associated Product
    });
}
module.exports = Reviews;
