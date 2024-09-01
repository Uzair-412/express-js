const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the FavouriteFeed model
const FavouriteFeed = db.define('FavouriteFeed', {
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
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('group', 'feed', 'page'),
        allowNull: true,
        defaultValue: 'feed'
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
    tableName: 'favourite_feeds',
    timestamps: false
});

export default FavouriteFeed;
