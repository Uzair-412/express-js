// Filename: VTPageFeed.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VTPageFeed = db.define('VTPageFeed', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    page_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    parent_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 0,
    },
    post: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    type: {
        type: DataTypes.ENUM('story', 'feed'),
        allowNull: true,
        defaultValue: 'feed',
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    attachment_type: {
        type: DataTypes.ENUM('image', 'video', 'both'),
        allowNull: true,
    },
    attachment: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    visibility: {
        type: DataTypes.ENUM('public', 'friends', 'onlyme'),
        allowNull: true,
        defaultValue: 'public',
    },
    mood: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    likes_count: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 0,
    },
    share_count: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 0,
    },
    comments_count: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
    },
    share_feed_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'Y',
    },
    is_deleted: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 0,
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
}, {
    tableName: 'vt_pages_feeds',
    timestamps: false,
});

export default VTPageFeed;
