const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseModuleQuizAnswer model
const CourseModuleQuizAnswer = db.define('CourseModuleQuizAnswer', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    option_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    module_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    section_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    exercise_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    quiz_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    is_true: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    total_marks: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    obtained_marks: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: true
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
    tableName: 'course_module_quiz_answers',
    timestamps: false
});

export default CourseModuleQuizAnswer;
