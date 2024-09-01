const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseModuleSectionExercise model
const CourseModuleSectionExercise = db.define('CourseModuleSectionExercise', {
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
    course_module_section_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
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
    type: {
        type: DataTypes.ENUM('quiz', 'video', 'file_upload', 'file_download'),
        allowNull: true,
        defaultValue: 'quiz'
    },
    file: {
        type: DataTypes.STRING(64),
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
    tableName: 'course_module_section_exercises',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default CourseModuleSectionExercise;
