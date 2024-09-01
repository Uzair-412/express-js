const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseChapterVideo model
const CourseChapterVideo = db.define('CourseChapterVideo', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    course_chapter_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    vendor_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    title: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    video: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    slug: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null
    },
    price_discounted: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null
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
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
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
    tableName: 'course_chapter_videos',
    timestamps: false
});

export default CourseChapterVideo;
