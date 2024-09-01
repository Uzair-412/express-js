const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseModuleQuiz model
const CourseModuleQuiz = db.define('CourseModuleQuiz', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    module_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    question: {
        type: DataTypes.TEXT,
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
    tableName: 'course_module_quizes',
    timestamps: false
});

export default CourseModuleQuiz;
