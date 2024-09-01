const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the QuizScores model
const QuizScores = db.define('QuizScores', {
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
        allowNull: true,
        defaultValue: 0
    },
    exercise_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    total_marks: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    obtained_marks: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: true
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
    tableName: 'quiz_scores',
    timestamps: false
});

export default QuizScores;
