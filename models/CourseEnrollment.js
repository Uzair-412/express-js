const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CourseEnrollment model
const CourseEnrollment = db.define('CourseEnrollment', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    course_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },
    course_payment_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
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
    tableName: 'course_enrollments',
    timestamps: false
});

export default CourseEnrollment;
