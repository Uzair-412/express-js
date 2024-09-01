const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the OauthAuthCodes model
const OauthAuthCodes = db.define('OauthAuthCodes', {
    id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        collate: 'utf8mb4_unicode_ci'
    },
    user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    client_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
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
    expires_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'oauth_auth_codes',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    indexes: [
        {
            name: 'oauth_auth_codes_user_id_index',
            fields: ['user_id']
        }
    ]
});

export default OauthAuthCodes;
