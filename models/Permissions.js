const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Permissions model
const Permissions = db.define('Permissions', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    guard_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    parent_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    sort: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'permissions',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default Permissions;
