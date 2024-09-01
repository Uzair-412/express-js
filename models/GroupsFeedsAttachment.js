const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the GroupsFeedsAttachment model
const GroupsFeedsAttachment = db.define('GroupsFeedsAttachment', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    groups_feed_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    attachment_type: {
        type: DataTypes.ENUM('image', 'video'),
        allowNull: true
    },
    attachment: {
        type: DataTypes.STRING(255),
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
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'groups_feeds_attachments',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default GroupsFeedsAttachment;
