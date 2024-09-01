const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseQuizResult model
const CourseQuizResult = db.define('CourseQuizResult', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    section_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    module_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    exercise_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    coach_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    result: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('mcq', 'both', 'text'),
        allowNull: true,
        defaultValue: 'mcq'
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
    tableName: 'course_quiz_result',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default CourseQuizResult;
