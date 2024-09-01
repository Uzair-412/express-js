// Filename: TwoFactorAuthentications.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const TwoFactorAuthentications = db.define('TwoFactorAuthentications', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    authenticatable_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci',
    },
    authenticatable_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
    },
    shared_secret: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci',
    },
    enabled_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    label: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci',
    },
    digits: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: false,
        defaultValue: 6,
    },
    seconds: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: false,
        defaultValue: 30,
    },
    window: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: false,
        defaultValue: 0,
    },
    algorithm: {
        type: DataTypes.STRING(16),
        allowNull: false,
        defaultValue: 'sha1',
        collate: 'utf8mb4_unicode_ci',
    },
    recovery_codes: {
        type: DataTypes.LONGTEXT,
        allowNull: true,
        collate: 'utf8mb4_bin',
    },
    recovery_codes_generated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    safe_devices: {
        type: DataTypes.LONGTEXT,
        allowNull: true,
        collate: 'utf8mb4_bin',
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
    tableName: 'two_factor_authentications',
    timestamps: false,
    indexes: [
        {
            name: '2fa_auth_type_auth_id_index',
            fields: ['authenticatable_type', 'authenticatable_id'],
        },
    ],
});

export default TwoFactorAuthentications;
