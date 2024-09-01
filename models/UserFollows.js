// Filename: UserFollows.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserFollows = db.define('UserFollows', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    following_user_id: {
        type: DataTypes.INTEGER(10),
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
    tableName: 'user_follows',
    timestamps: false,
});

export default UserFollows;
