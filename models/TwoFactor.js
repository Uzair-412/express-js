const { DataTypes } = require('sequelize');
const db = require('../config/database');

const TwoFactor = db.define('TwoFactor', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    authenticatable_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
    },
    tfa_code: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    digits_number: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: false,
        defaultValue: 6,
    },
    exp_minutes: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: false,
        defaultValue: 1,
    },
    type: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    verify: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW, // Default to current date and time
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW, // Default to current date and time
    },
}, {
    tableName: 'two_factor',
    timestamps: false,
    indexes: [
        {
            name: '2fa_auth_type_auth_id_index',
            fields: ['authenticatable_type', 'user_id'],
        },
    ],
});

export default TwoFactor;
