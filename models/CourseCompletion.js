const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseCompletion model
const CourseCompletion = db.define('CourseCompletion', {
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
    course_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    completion_status: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 1
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
    tableName: 'course_completion',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default CourseCompletion;
