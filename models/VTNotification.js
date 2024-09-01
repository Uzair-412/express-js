// Filename: VTNotification.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VTNotification = db.define('VTNotification', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    friend_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    feed_id: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    feed_comment_id: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    group_id: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    page_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    comment_id: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    notification_badge_read: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    notification_delete: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 0,
    },
    notification_type: {
        type: DataTypes.ENUM(
            'friend_request',
            'accept_friend_request',
            'user_followed',
            'feed_like',
            'feed_comment',
            'feed_comment_like',
            'group_feed_like',
            'group_feed_comment',
            'group_feed_comment_like',
            'join_group_private_request',
            'join_group',
            'like_page',
            'page_feed_like',
            'page_feed_comment',
            'page_feed_comment_like',
            'feed_report'
        ),
        allowNull: true,
        collate: 'utf8mb3_general_ci',
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    mobile_navigation: {
        type: DataTypes.ENUM('profile', 'feed', 'group', 'page'),
        allowNull: true,
    },
    subject: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    email_sent: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'Y',
    },
    viewed: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 0,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'vt_notifications',
    timestamps: false,
});

export default VTNotification;
