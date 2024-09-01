const { DataTypes } = require('sequelize');
const db = require('../config/database');

const ShareFeed = db.define('ShareFeed', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    feed_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    groups_feed_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    pages_feed_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    post: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    type: {
        type: DataTypes.ENUM('profilefeed', 'pagefeed', 'groupfeed'),
        allowNull: true,
        defaultValue: null,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'share_feed',
    timestamps: false,
});

export default ShareFeed;
