// Filename: SpeakerWebinars.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const SpeakerWebinars = db.define('SpeakerWebinars', {
    id: {
        type: DataTypes.INT(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    speaker_id: {
        type: DataTypes.INT(10),
        allowNull: true,
    },
    webinar_id: {
        type: DataTypes.INT(10),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'speaker_webinar',
    timestamps: false,
});

export default SpeakerWebinars;
