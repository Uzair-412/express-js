// Filename: SocialNetworks.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const SocialNetworks = db.define('SocialNetworks', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    icon_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    icon_code: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    color_code: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    prefix: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    pos: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    is_common: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
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
    tableName: 'social_networks',
    timestamps: false,
});

export default SocialNetworks;
