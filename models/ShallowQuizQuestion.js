const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ShallowQuizQuestion model
const ShallowQuizQuestion = db.define('ShallowQuizQuestion', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    parent_quiz_question_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    module_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    section_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    exercise_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    detail: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    quiz_id: {
        type: DataTypes.INTEGER(10),
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
        allowNull: true
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
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'shallow_quiz_questions',
    timestamps: false,
});

export default ShallowQuizQuestion;
