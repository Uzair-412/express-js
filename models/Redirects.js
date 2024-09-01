const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Redirects model
const Redirects = db.define('Redirects', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    type_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    request_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true
    },
    target_url: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    mode: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: 'internal'
    },
    reference: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'redirects',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default Redirects;
