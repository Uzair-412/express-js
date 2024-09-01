// Filename: Video.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Video = db.define('Video', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    source: {
        type: DataTypes.ENUM('Youtube', 'Vimeo'),
        allowNull: true,
        defaultValue: 'Youtube',
        collate: 'latin1_swedish_ci',
    },
    video_id: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    thumbnail_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    large_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    position: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'latin1_swedish_ci',
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
    tableName: 'videos',
    timestamps: false,
});

export default Video;
