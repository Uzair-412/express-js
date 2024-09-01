// Filename: VTGroup.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VTGroup = db.define('VTGroup', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    admin_user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    group_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    short_description: {
        type: DataTypes.TEXT,
        allowNull: true,
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
    group_type: {
        type: DataTypes.ENUM('Public', 'Private'),
        allowNull: true,
        defaultValue: 'Public',
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
    tableName: 'vt_groups',
    timestamps: false,
});

export default VTGroup;
