const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PagesFeedsLikes model
const PagesFeedsLikes = db.define('PagesFeedsLikes', {
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
    tableName: 'pages_feeds_likes',
    timestamps: false
});

export default PagesFeedsLikes;
