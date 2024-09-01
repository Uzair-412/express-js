const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PasswordHistories model
const PasswordHistories = db.define('PasswordHistories', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    model_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    model_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'password_histories',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default PasswordHistories;
