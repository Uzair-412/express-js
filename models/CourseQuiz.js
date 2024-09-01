const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseQuiz model
const CourseQuiz = db.define('CourseQuiz', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    module_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    section_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    exercise_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    active: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
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
    tableName: 'course_quizzes',
    timestamps: false
});

export default CourseQuiz;
