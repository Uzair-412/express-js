const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Course model
const Course = db.define('Course', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    course_category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    course_type_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    short_description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null
    },
    price_original: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null
    },
    price_placeholder: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    discount_start_time: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
    },
    discount_end_time: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
    },
    thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    is_24_7_support_service: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 1
    },
    is_videos: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 1
    },
    general_guidance: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 1
    },
    is_practice_questions: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 1
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    marking_user: {
        type: DataTypes.ENUM('coach', 'admin', 'auto'),
        allowNull: true,
        defaultValue: 'auto',
    },
    prerequisite_courses: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null,
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null,
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
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
    tableName: 'courses',
    timestamps: false
});

export default Course;
