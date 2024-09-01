const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ShallowCourse model
const ShallowCourse = db.define('ShallowCourse', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    parent_course_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    course_category_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    purchased_user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    coach_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    course_type_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    short_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    price_original: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    price_placeholder: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    discount_start_time: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    discount_end_time: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    is_24_7_support_service: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 1
    },
    is_videos: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 1
    },
    email_sent: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'N'
    },
    general_guidance: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 1
    },
    is_practice_questions: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: 1
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    marking_user: {
        type: DataTypes.ENUM('coach', 'admin', 'auto'),
        allowNull: true,
        defaultValue: 'auto'
    },
    prerequisite_courses: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true
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
    tableName: 'shallow_course',
    timestamps: false,
});

export default ShallowCourse;
