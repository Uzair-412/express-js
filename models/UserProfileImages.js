// Filename: UserProfileImages.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserProfileImages = db.define('UserProfileImages', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    image_path: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('cover_image', 'profile_image'),
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    is_deleted: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 0,
    },
    created_at: {
        type: DataTypes.DATETIME,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'user_profile_images',
    timestamps: false,
});

export default UserProfileImages;
