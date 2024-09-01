const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the File model
const File = db.define('File', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    video_thumbnail: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    video_image: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    type: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    video_type: {
        type: DataTypes.STRING(11),
        allowNull: true
    },
    video_title: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    upload_time: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    default: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    fileable_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    fileable_type: {
        type: DataTypes.STRING(191),
        allowNull: false
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
    tableName: 'files',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default File;
