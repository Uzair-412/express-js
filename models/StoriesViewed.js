// Filename: StoriesViewed.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const StoriesViewed = db.define('StoriesViewed', {
    id: {
        type: DataTypes.INT(10),
        primaryKey: true,
        autoIncrement: true,
    },
    feed_id: {
        type: DataTypes.INT(10),
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INT(10),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'stories_viewed',
    timestamps: false,
});

export default StoriesViewed;
