const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Country model
const Country = db.define('Country', {
    id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        collate: 'utf8mb3_general_ci'
    },
    iso3: {
        type: DataTypes.CHAR(3),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb3_general_ci'
    },
    iso2: {
        type: DataTypes.CHAR(2),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb3_general_ci'
    },
    phonecode: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb3_general_ci'
    },
    capital: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb3_general_ci'
    },
    currency: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb3_general_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    },
    flag: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 1
    },
    wikiDataId: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        comment: 'Rapid API GeoDB Cities',
        collate: 'utf8mb3_general_ci'
    }
}, {
    tableName: 'countries',
    timestamps: false
});

module.exports = Country;