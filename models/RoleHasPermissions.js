const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the RoleHasPermissions model
const RoleHasPermissions = db.define('RoleHasPermissions', {
    permission_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    role_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        primaryKey: true
    }
}, {
    tableName: 'role_has_permissions',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default RoleHasPermissions;
