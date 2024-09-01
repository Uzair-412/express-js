// Filename: WebinarQuiz.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const WebinarQuiz = db.define('WebinarQuiz', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    webinar_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: true,
    },
    active: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 1,
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
    tableName: 'webinar_quizzes',
    timestamps: false,
});

export default WebinarQuiz;
