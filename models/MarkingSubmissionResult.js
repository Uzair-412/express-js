const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the MarkingSubmissionResult model
const MarkingSubmissionResult = db.define('MarkingSubmissionResult', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    marking_submission_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    question_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    feedback: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb4_unicode_ci'
    },
    status: {
        type: DataTypes.ENUM('satisfactory', 'non_satisfactory'),
        allowNull: true,
        defaultValue: 'satisfactory',
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
    tableName: 'marking_submission_result',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default MarkingSubmissionResult;
