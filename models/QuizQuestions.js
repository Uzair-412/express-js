const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the QuizQuestions model
const QuizQuestions = db.define('QuizQuestions', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    module_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    section_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
    },
    exercise_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    detail: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    quiz_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    question: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('mcq', 'reflective_question', 'reflective_question_multiline', 'feedback_mcq', 'feedback_question_multiline'),
        allowNull: true,
        defaultValue: 'mcq'
    },
    score: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 1
    },
    file: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    video_id: {
        type: DataTypes.STRING(255),
        allowNull: true
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
    tableName: 'quiz_questions',
    timestamps: false
});

export default QuizQuestions;
