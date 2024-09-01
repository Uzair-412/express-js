// Filename: UtmCodes.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UtmCodes = db.define('UtmCodes', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    code: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'utm_codes',
    timestamps: false,
});

export default UtmCodes;
