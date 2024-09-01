// Filename: Show.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Shows = db.define('Show', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    association_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    booth: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    dates: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    details_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    image_thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    position: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'shows',
    timestamps: false,
    collate: 'latin1_swedish_ci'
});

export default Shows;
