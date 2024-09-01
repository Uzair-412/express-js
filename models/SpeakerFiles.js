// Filename: SpeakerFiles.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const SpeakerFiles = db.define('SpeakerFiles', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    position: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    file: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    speaker_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
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
    tableName: 'speaker_files',
    timestamps: false,
});

export default SpeakerFiles;
