// Filename: WebinarQuizScore.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const WebinarQuizScore = db.define('WebinarQuizScore', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    webinar_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    total_marks: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    obtained_marks: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'webinar_quiz_scores',
    timestamps: false,
});

export default WebinarQuizScore;
