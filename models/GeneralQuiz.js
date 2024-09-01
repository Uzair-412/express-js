const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the GeneralQuiz model
const GeneralQuiz = db.define('GeneralQuiz', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    skill_level: {
        type: DataTypes.ENUM('beginner', 'intermediate', 'expert', 'none of these'),
        allowNull: true
    },
    Veterinary_knowledge: {
        type: DataTypes.ENUM('beginner', 'intermediate', 'expert', 'none of these'),
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
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'general_quizzes',
    timestamps: false
});

export default GeneralQuiz;
