// Filename: VendorJobApplicationQuestion.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorJobApplicationQuestion = db.define('VendorJobApplicationQuestion', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    job_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    question: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'vendor_job_application_questions',
    timestamps: false,
});

export default VendorJobApplicationQuestion;
