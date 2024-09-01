// Filename: ZipCode.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const ZipCode = db.define('ZipCode', {
    zip: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    decommissioned: {
        type: DataTypes.STRING(8),
        allowNull: true,
    },
    primary_city: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    acceptable_cities: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    unacceptable_cities: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    state: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    county: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    timezone: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    area_codes: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    world_region: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    country: {
        type: DataTypes.STRING(8),
        allowNull: true,
    },
    latitude: {
        type: DataTypes.STRING(8),
        allowNull: true,
    },
    longitude: {
        type: DataTypes.STRING(8),
        allowNull: true,
    },
    irs_estimated_population: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
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
    tableName: 'zip_codes',
    timestamps: false,
});

export default ZipCode;
