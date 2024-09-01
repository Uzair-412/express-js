const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the FeedComment model
const FeedComment = db.define('FeedComment', {
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
    feed_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    likes_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
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
    tableName: 'feed_comments',
    timestamps: false
});

export default FeedComment;
