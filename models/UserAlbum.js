// Filename: UserAlbum.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserAlbum = db.define('UserAlbum', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    album_name: {
        type: DataTypes.STRING(200),
        allowNull: true,
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
    tableName: 'user_album',
    timestamps: false,
});

export default UserAlbum;
