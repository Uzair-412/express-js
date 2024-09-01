// Filename: SocialAccount.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const SocialAccounts = db.define('SocialAccount', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false
    },
    provider: {
        type: DataTypes.STRING(32),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    provider_id: {
        type: DataTypes.STRING(191),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    token: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb4_unicode_ci'
    },
    avatar: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb4_unicode_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    tableName: 'social_accounts',
    timestamps: false,
    collate: 'utf8mb4_unicode_ci'
});

export default SocialAccounts;
