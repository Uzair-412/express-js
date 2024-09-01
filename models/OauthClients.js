const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the OauthClients model
const OauthClients = db.define('OauthClients', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    secret: {
        type: DataTypes.STRING(100),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    provider: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    redirect: {
        type: DataTypes.TEXT,
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    personal_access_client: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    password_client: {
        type: DataTypes.TINYINT(1),
        allowNull: false
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
    }
}, {
    tableName: 'oauth_clients',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    indexes: [
        {
            name: 'oauth_clients_user_id_index',
            fields: ['user_id']
        }
    ]
});

export default OauthClients;
