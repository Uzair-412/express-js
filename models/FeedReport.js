const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the FeedReport model
const FeedReport = db.define('FeedReport', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    feed_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    feed_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    reported_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    post_type: {
        type: DataTypes.ENUM('group', 'feed', 'page'),
        allowNull: true,
        defaultValue: 'feed'
    },
    feed_reported_type_id: {
        type: DataTypes.INTEGER,
        allowNull: true
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
    tableName: 'feed_reports',
    timestamps: false
});

export default FeedReport;
