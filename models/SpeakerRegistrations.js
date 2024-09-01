// Filename: SpeakerRegistrations.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const SpeakerRegistrations = db.define('SpeakerRegistrations', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    last_name: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(191),
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    country_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    state_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    zip_code: {
        type: DataTypes.STRING(12),
        allowNull: true,
    },
    role_in_practice: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    speciality: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    education: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    job_title: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    institute: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    topic_of_presentation: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    race_approved: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    comments: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },
    resume_file: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'speaker_registration',
    timestamps: false,
});

export default SpeakerRegistrations;
