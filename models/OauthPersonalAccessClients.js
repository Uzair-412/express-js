const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the OauthPersonalAccessClients model
const OauthPersonalAccessClients = db.define('OauthPersonalAccessClients', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    client_id: {
        type: DataTypes.BIGINT.UNSIGNED,
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
    tableName: 'oauth_personal_access_clients',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default OauthPersonalAccessClients;
