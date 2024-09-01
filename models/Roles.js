const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Roles model
const Roles = db.define('Roles', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    guard_name: {
        type: DataTypes.STRING(255),
        allowNull: false
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
    tableName: 'roles',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default Roles;
