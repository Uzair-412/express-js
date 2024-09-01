// Filename: VTPage.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VTPage = db.define('VTPage', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    admin_user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    page_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_general_ci',
    },
    category: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    profile_image: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    cover_image: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    total_members: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 0,
    },
    total_post: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 0,
    },
    page_type: {
        type: DataTypes.ENUM('public', 'private'),
        allowNull: true,
        defaultValue: 'public',
        collate: 'utf8mb4_general_ci',
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'vt_pages',
    timestamps: false,
});

export default VTPage;
