// Filename: States.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const States = db.define('States', {
    id: {
        type: DataTypes.MEDIUMINT(7).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    country_id: {
        type: DataTypes.MEDIUMINT(7).UNSIGNED,
        allowNull: false,
    },
    country_code: {
        type: DataTypes.CHAR(2),
        allowNull: false,
    },
    fips_code: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    iso2: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    flag: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 1,
    },
    wikiDataId: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'Rapid API GeoDB Cities',
    },
}, {
    tableName: 'states',
    timestamps: false,
    indexes: [
        {
            name: 'country_region',
            fields: ['country_id'],
        },
    ],
});

module.exports = States;
