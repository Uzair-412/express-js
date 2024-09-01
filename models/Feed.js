const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Feed model
const Feed = db.define('Feed', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    parent_id: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: '0'
    },
    post: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('story', 'feed'),
        allowNull: true,
        defaultValue: 'feed'
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    attachment_type: {
        type: DataTypes.ENUM('image', 'video'),
        allowNull: true
    },
    attachment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    visibility: {
        type: DataTypes.ENUM('public', 'friends', 'onlyme'),
        allowNull: true,
        defaultValue: 'public'
    },
    mood: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    likes_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    share_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    comments_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    share_feed_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    report_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    blocked: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    is_deleted: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    hide_from_timeline: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
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
    tableName: 'feeds',
    timestamps: false
});

export default Feed;
