
const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseCategory model
const CourseCategory = db.define('CourseCategory', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    parent_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    short_description: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    slug: {
        type: DataTypes.STRING(255),
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
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'course_categories',
    timestamps: false
});

export default CourseCategory;
