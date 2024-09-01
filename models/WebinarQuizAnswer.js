// Filename: WebinarQuizAnswer.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const WebinarQuizAnswer = db.define('WebinarQuizAnswer', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    webinar_question_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: true,
    },
    active: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 1,
    },
    is_true: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'webinar_quiz_answers',
    timestamps: false,
});

export default WebinarQuizAnswer;
