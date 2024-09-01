// Filename: UserAlbumImages.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserAlbumImages = db.define('UserAlbumImages', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_album_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    image_path: {
        type: DataTypes.TEXT,
        allowNull: false,
        collate: 'latin1_swedish_ci',
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'Y',
        collate: 'latin1_swedish_ci',
    },
    is_deleted: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 0,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'user_album_images',
    timestamps: false,
});

export default UserAlbumImages;
