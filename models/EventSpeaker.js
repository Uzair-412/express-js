const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the EventSpeaker model
const EventSpeaker = db.define('EventSpeaker', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    speaker_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
        onUpdate: 'CURRENT_TIMESTAMP'
    }
}, {
    tableName: 'event_speakers',
    collate: 'utf8mb4_general_ci',
    timestamps: false
});

export default EventSpeaker;
