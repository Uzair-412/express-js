const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the MicroSites model
const MicroSites = db.define('MicroSites', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    domain: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci',
        unique: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'micro_sites',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default MicroSites;
