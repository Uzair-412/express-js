const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the QuizResults model
const QuizResults = db.define('QuizResults', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    module_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    quiz_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    question_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    answer_id: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    is_true: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 0
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
    tableName: 'quiz_results',
    timestamps: false
});

export default QuizResults;
