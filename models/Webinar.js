// Filename: Webinar.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Speaker = require('./Speaker');
const SpeakerWebinars = require('./SpeakerWebinars');

const Webinar = db.define('Webinar', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
        unique: true,
    },
    event_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    categories: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    race_id_live: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    race_id_recorded: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    course_number: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    race_approved: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 0,
    },
    ce_hours: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    course_about: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    learning_objectives: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    sponsors: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    quick_links: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    thumbnail: {
        type: DataTypes.STRING(64),
        allowNull: false,
        collate: 'utf8mb4_general_ci',
    },
    header_image: {
        type: DataTypes.STRING(64),
        allowNull: false,
        collate: 'utf8mb4_general_ci',
    },
    short_detail: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    full_detail: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    time_zone: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    zoom_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    zoom_meeting_id: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    zoom_password: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    allow_video: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 0,
    },
    video_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    video_length: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    video_type: {
        type: DataTypes.ENUM('youtube', 'vimeo'),
        allowNull: true,
        defaultValue: 'youtube',
        collate: 'utf8mb4_general_ci',
    },
    show_in_app: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 1,
    },
    show_latest: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 0,
    },
    display_on: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 1,
    },
    webinar_type: {
        type: DataTypes.ENUM('event', 'website'),
        allowNull: true,
        defaultValue: 'website',
        collate: 'utf8mb4_general_ci',
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_general_ci',
    },
    file: {
        type: DataTypes.STRING(45),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    schema: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    certificate: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
}, {
    tableName: 'webinars',
    timestamps: false,
});


Webinar.associate = (models) => {
    Webinar.belongsToMany(models.Speakers, { 
        through: 'SpeakerWebinars', 
        foreignKey: 'webinar_id', 
        otherKey: 'speaker_id', 
        as: 'speakers' 
    });
};
  
module.exports = Webinar;
