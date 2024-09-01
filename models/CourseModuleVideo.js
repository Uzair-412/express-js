const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseModuleVideo model
const CourseModuleVideo = db.define('CourseModuleVideo', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    course_module_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    course_module_section_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    video: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    is_free: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 1
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
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
    tableName: 'course_module_videos',
    timestamps: false
});

export default CourseModuleVideo;
