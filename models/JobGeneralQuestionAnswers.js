const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the JobGeneralQuestionAnswers model
const JobGeneralQuestionAnswers = db.define('JobGeneralQuestionAnswers', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    applied_job_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    question_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    answer: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null,
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
    tableName: 'job_general_question_answers',
    timestamps: false
});

export default JobGeneralQuestionAnswers;
