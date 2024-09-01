const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ShallowCourseModuleSection model
const ShallowCourseModuleSection = db.define('ShallowCourseModuleSection', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    purchased_user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    parent_course_module_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    parent_course_module_section_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    course_module_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    is_feedback: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 0
    },
    sequence_no: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: false
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
        type: DataTypes.STRING(50),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'shallow_course_module_sections',
    timestamps: false,
    collate: 'utf8mb4_unicode_ci'
});

export default ShallowCourseModuleSection;
