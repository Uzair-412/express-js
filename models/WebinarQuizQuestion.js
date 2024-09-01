// Filename: WebinarQuizQuestion.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const WebinarQuizQuestion = db.define('WebinarQuizQuestion', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    webinar_quiz_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: true,
    },
    active: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 1,
    },
    question: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    image: {
        type: DataTypes.STRING(45),
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
    tableName: 'webinar_quiz_questions',
    timestamps: false,
});

export default WebinarQuizQuestion;
