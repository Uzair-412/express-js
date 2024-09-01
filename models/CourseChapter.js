const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseChapter model
const CourseChapter = db.define('CourseChapter', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    course_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    slug: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
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
    tableName: 'course_chapters',
    timestamps: false
});

export default CourseChapter;
