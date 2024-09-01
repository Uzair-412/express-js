const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the QuizAnswers model
const QuizAnswers = db.define('QuizAnswers', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    question_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    is_true: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 0
    },
    active: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 1
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'quiz_answers',
    timestamps: false
});

export default QuizAnswers;
