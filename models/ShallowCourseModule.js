const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ShallowCourseModule model
const ShallowCourseModule = db.define('ShallowCourseModule', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    purchased_user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    parent_course_module_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    course_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    parent_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 0
    },
    sequence_no: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    watch_hours: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    is_free: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 1
    },
    allow_quiz: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    detail: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    video_type: {
        type: DataTypes.ENUM('youtube', 'vimeo', 'file'),
        allowNull: true
    },
    video_id: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    is_feedback: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'shallow_course_modules',
    timestamps: false,
});

export default ShallowCourseModule;
