const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CommonDisease model
const CommonDisease = db.define('CommonDisease', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    animal_pet_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    overview_heading: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    overview_content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    prevention_heading: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    prevention_content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    treatment_heading: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    treatment_content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    more_info_heading: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    more_info_content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
    site_url: {
        type: DataTypes.STRING(500),
        allowNull: true,
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
    tableName: 'common_diseases',
    timestamps: false
});

export default CommonDisease;
