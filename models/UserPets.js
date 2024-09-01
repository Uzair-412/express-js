// Filename: UserPets.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserPets = db.define('UserPets', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    complete_address: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    age: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    age_in: {
        type: DataTypes.ENUM('year', 'month'),
        allowNull: true,
    },
    breed: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    gender: {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: true,
    },
    weight: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    unit: {
        type: DataTypes.ENUM('lbs', 'kg'),
        allowNull: true,
    },
    slug: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    short_description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    images: {
        type: DataTypes.MEDIUMTEXT,
        allowNull: true,
    },
    thumbnail: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    video: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    pet_type_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
    },
    previous_record: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
    },
    badge_request_submitted: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'N',
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    source: {
        type: DataTypes.ENUM('DVM Central', 'Vet And Tech'),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: 'CURRENT_TIMESTAMP',
    },
}, {
    tableName: 'user_pets',
    timestamps: false,
});

export default UserPets;
