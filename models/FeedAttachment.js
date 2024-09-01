const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the FeedAttachment model
const FeedAttachment = db.define('FeedAttachment', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    feed_id: {
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
    is_deleted: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
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
    tableName: 'feed_attachments',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default FeedAttachment;
