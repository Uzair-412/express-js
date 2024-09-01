const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ShallowCourseModuleSectionExercise model
const ShallowCourseModuleSectionExercise = db.define('ShallowCourseModuleSectionExercise', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    purchased_user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    parent_course_module_section_exercise_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    course_module_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    course_module_section_id: {
        type: DataTypes.INTEGER(10),
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
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'shallow_course_module_section_exercises',
    timestamps: false,
    collate: 'utf8mb4_unicode_ci'
});

export default ShallowCourseModuleSectionExercise;
