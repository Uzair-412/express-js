const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the OauthRefreshTokens model
const OauthRefreshTokens = db.define('OauthRefreshTokens', {
    id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        collate: 'utf8mb4_unicode_ci'
    },
    access_token_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    revoked: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    expires_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'oauth_refresh_tokens',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    indexes: [
        {
            name: 'oauth_refresh_tokens_access_token_id_index',
            fields: ['access_token_id']
        }
    ]
});

export default OauthRefreshTokens;
