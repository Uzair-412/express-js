const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PersonalAccessTokens model
const PersonalAccessTokens = db.define('PersonalAccessTokens', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    tokenable_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    tokenable_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    token: {
        type: DataTypes.STRING(64),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    abilities: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    last_used_at: {
        type: DataTypes.DATE,
        allowNull: true
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
    tableName: 'personal_access_tokens',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default PersonalAccessTokens;
