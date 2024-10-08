// Filename: Speakers.js
const { DataTypes, Op } = require('sequelize');
const db = require('../config/database');
const Webinar = require('./Webinar');
const SpeakerWebinar = require('./SpeakerWebinars');
const moment = require('moment-timezone'); 
const sequelize = require('../config/database'); // Your Sequelize instance

const Speaker = db.define('Speakers', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    last_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        unique: true,
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    job_title: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    institute: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    profile: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    profession: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    classification: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    specialty: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    employer_type: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    practice_role: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    vets_in_practice: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    techs_in_practice: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    practice_revenue: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    practices_in_group: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    credentials: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    website: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    phone: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    mobile: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    city: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    state: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    zip: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    country: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null,
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null,
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null,
    },
    sm_facebook: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_linkedin: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_twitter: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_instagram: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_pinterest: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_youtube: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_vimeo: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    position: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: null
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'Speaker',
    tableName: 'speakers',
    timestamps: true
});

// Define the many-to-many relationship with Webinar using the `SpeakerWebinar` intermediate table

// Associations

Speaker.belongsToMany(Webinar, { 
    through: SpeakerWebinar, 
    foreignKey: 'speaker_id', 
    otherKey: 'webinar_id', 
    as: 'webinar_speakers' 
});

Speaker.belongsToMany(Webinar, { 
    through: SpeakerWebinar, 
    foreignKey: 'speaker_id', 
    otherKey: 'webinar_id',
    as: 'speaker_past_webinars' 
});

// Define association in Speaker model
Speaker.associate = (models) => {
    Speaker.belongsToMany(models.Webinar, {
        through: 'speaker_webinar',
        as: 'webinars', // Alias for accessing webinars related to a speaker
        foreignKey: 'speaker_id', // The key in the join table that relates to speakers
        otherKey: 'webinar_id' // The key in the join table that relates to webinars
    });
};

module.exports = Speaker;
