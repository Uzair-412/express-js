const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseModuleQuizOption model
const CourseModuleQuizOption = db.define('CourseModuleQuizOption', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    quiz_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    quiz_option: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    is_true: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
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
    tableName: 'course_module_quiz_options',
    timestamps: false
});

export default CourseModuleQuizOption;
