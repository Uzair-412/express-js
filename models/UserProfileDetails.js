// Filename: UserProfileDetails.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserProfileDetails = db.define('UserProfileDetails', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    altemail: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    city: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    profile_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    state: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    country: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    social_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    marital_status: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: "Don’t want to specify",
        collate: 'latin1_swedish_ci',
    },
    age: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    interested_in: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    language_eng: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 0,
    },
    language_french: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 0,
    },
    language_chinese: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 0,
    },
    language_spanish: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 0,
    },
    language_arabic: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 0,
    },
    language_italian: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 0,
    },
    hobbies: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    relationship_status: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    family_members: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    work: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    professional_skills: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    college: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    current_city_and_hometown: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    other_places_lived: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    company: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    veterinarian: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
    },
    license: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
    },
    special_interest: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    speciality: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    role: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    veterinary_licence_number: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    license_issuing_state: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    heard_from: {
        type: DataTypes.STRING(45),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    outside_us_state: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
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
    facebook_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    twitter_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    google_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    instagram_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    youtube_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    account_privacy: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
    },
    activity_status: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
    },
    story_sharing: {
        type: DataTypes.ENUM('public', 'only_me'),
        allowNull: false,
        defaultValue: 'public',
        collate: 'latin1_swedish_ci',
    },
    photo_of_you: {
        type: DataTypes.ENUM('automatically', 'manualy'),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    your_profile: {
        type: DataTypes.ENUM('public', 'friend', 'specific_friend', 'only_me'),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    your_message: {
        type: DataTypes.ENUM('anyone', 'friend'),
        allowNull: false,
        defaultValue: 'anyone',
        collate: 'latin1_swedish_ci',
    },
    content_notification: {
        type: DataTypes.ENUM('enable', 'disable'),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
}, {
    tableName: 'user_profile_details',
    timestamps: false,
});

export default UserProfileDetails;
