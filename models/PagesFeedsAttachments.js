const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PagesFeedsAttachments model
const PagesFeedsAttachments = db.define('PagesFeedsAttachments', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    pages_feed_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    attachment_type: {
        type: DataTypes.ENUM('image', 'video'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    attachment: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
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
    tableName: 'pages_feeds_attachments',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default PagesFeedsAttachments;
