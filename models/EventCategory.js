const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the EventCategory model
const EventCategory = db.define('EventCategory', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true
    },
    section: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: 'exhibitors'
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
    tableName: 'events_categories',
    timestamps: false
});

export default EventCategory;
