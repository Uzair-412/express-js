const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the FriendRequest model
const FriendRequest = db.define('FriendRequest', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    friend_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'accepted', 'rejected', 'unfriend'),
        allowNull: true,
        defaultValue: 'pending'
    },
    uncheck_request: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: true,
        defaultValue: '0'
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
    tableName: 'friend_request',
    timestamps: false
});

export default FriendRequest;
