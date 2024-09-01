// Filename: SpPosts.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const SpPosts = db.define('SpPosts', {
    id: {
        type: DataTypes.INT(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    category_id: {
        type: DataTypes.INT(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
    },
    heading_content: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    short_content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    full_content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image_thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    publish_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'Y',
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'sp_posts',
    timestamps: false,
});

export default SpPosts;
