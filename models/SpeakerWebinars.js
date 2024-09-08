// Filename: SpeakerWebinars.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Webinar = require('../models/Webinar');
const Speaker = require('./Speaker');

const SpeakerWebinars = db.define('SpeakerWebinars', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    speaker_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    webinar_id: {
        type: DataTypes.INTEGER(10),
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

SpeakerWebinars.associate = (models) => {
    SpeakerWebinars.belongsTo(models.Webinar, { foreignKey: 'webinar_id' });
    SpeakerWebinars.belongsTo(models.Speaker, { foreignKey: 'speaker_id' });
};
  
module.exports = SpeakerWebinars;
