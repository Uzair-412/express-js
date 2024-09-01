const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the LogHistory model
const LogHistory = db.define('LogHistory', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    action: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    action_model: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    ip_address: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    field: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    action_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    tableName: 'log_history',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default LogHistory;
