// Filename: VirtualExpo.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VirtualExpo = db.define('VirtualExpo', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    practice_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    time_zone: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    country: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    raffle: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_unicode_ci',
    },
    type: {
        type: DataTypes.STRING(20),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'virtual_expo',
    timestamps: false,
});

export default VirtualExpo;
