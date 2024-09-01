const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseFeedback model
const CourseFeedback = db.define('CourseFeedback', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    course_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    section_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    module_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    exercise_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    feedback_result: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    tableName: 'course_feedback',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default CourseFeedback;
