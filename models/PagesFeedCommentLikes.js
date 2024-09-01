const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PagesFeedCommentLikes model
const PagesFeedCommentLikes = db.define('PagesFeedCommentLikes', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    like_type: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: 'like',
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
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
    tableName: 'pages_feed_comment_likes',
    timestamps: false
});

export default PagesFeedCommentLikes;
