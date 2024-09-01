// Filename: UserProfiles.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserProfiles = db.define('UserProfiles', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    company_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    street_addr_1: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    street_addr_2: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    phone_number: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    alt_phone_number: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    country: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    state: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    city: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    pin_code: {
        type: DataTypes.BIGINT(19),
        allowNull: true,
    },
    facebook_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    instagram_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    twitter_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    linkdin_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    user_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'user_profiles',
    timestamps: false,
});

export default UserProfiles;
