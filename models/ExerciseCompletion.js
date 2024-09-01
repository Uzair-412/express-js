const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ExerciseCompletion model
const ExerciseCompletion = db.define('ExerciseCompletion', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    section_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    exercise_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    completion_status: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 1
    },
    is_last_exercise_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
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
        onUpdate: 'CURRENT_TIMESTAMP'
    }
}, {
    tableName: 'exercise_completion',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default ExerciseCompletion;
