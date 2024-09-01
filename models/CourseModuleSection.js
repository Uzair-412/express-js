const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseModuleSection model
const CourseModuleSection = db.define('CourseModuleSection', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    course_module_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    is_feedback: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    sequence_no: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: false
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
        type: DataTypes.STRING(50),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'course_module_sections',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default CourseModuleSection;
