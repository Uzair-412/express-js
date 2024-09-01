const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseModule model
const CourseModule = db.define('CourseModule', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    course_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    parent_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    sequence_no: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    watch_hours: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    is_free: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
    },
    allow_quiz: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    detail: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    video_type: {
        type: DataTypes.ENUM('youtube', 'vimeo', 'file'),
        allowNull: true
    },
    video_id: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    is_feedback: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'course_modules',
    timestamps: false
});

export default CourseModule;
