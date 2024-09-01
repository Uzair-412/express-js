const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PasswordResets model
const PasswordResets = db.define('PasswordResets', {
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    otp: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    token: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'password_resets',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default PasswordResets;
