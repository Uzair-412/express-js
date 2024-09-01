const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the MarkingSubmission model
const MarkingSubmission = db.define('MarkingSubmission', {
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
        allowNull: false
    },
    exercise_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marking_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    course_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb4_unicode_ci'
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
    tableName: 'marking_submission',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default MarkingSubmission;
