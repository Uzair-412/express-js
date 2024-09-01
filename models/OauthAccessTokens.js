const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the OauthAccessTokens model
const OauthAccessTokens = db.define('OauthAccessTokens', {
    id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        collate: 'utf8mb4_unicode_ci'
    },
    user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    client_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    scopes: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    revoked: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    expires_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'oauth_access_tokens',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    indexes: [
        {
            name: 'oauth_access_tokens_user_id_index',
            fields: ['user_id']
        }
    ]
});

export default OauthAccessTokens;
