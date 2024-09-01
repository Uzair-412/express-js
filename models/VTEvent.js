// Filename: VTEvent.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VTEvent = db.define('VTEvent', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    event_name: {
        type: DataTypes.STRING(200),
        allowNull: false,
        collate: 'utf8mb3_general_ci',
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb3_general_ci',
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb3_general_ci',
    },
    other_requirements: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb3_general_ci',
    },
    event_image: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb3_general_ci',
    },
    event_start_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    event_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'Y',
        collate: 'utf8mb3_general_ci',
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
    tableName: 'vt_events',
    timestamps: false,
});

export default VTEvent;
