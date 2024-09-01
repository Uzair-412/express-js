const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ShallowQuizAnswer model
const ShallowQuizAnswer = db.define('ShallowQuizAnswer', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    parent_question_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    parent_quiz_answer_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    question_id: {
        type: DataTypes.INTEGER(10),
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
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'shallow_quiz_answers',
    timestamps: false,
});

export default ShallowQuizAnswer;
