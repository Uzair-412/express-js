// Filename: VendorJobApplicationPreference.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorJobApplicationPreference = db.define('VendorJobApplicationPreference', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    vendor_job_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    receive_application: {
        type: DataTypes.ENUM('Email', 'Walk-in'),
        allowNull: false,
    },
    resume_submission: {
        type: DataTypes.ENUM('Yes', 'No', 'Option'),
        allowNull: true,
        defaultValue: 'Yes',
    },
    application_deadline: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    allow_conversation: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
    },
    enable_employer_assist: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 1,
    },
    decline_time: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    individual_email_update: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
    },
}, {
    tableName: 'vendor_job_application_prefrences',
    timestamps: false,
});

export default VendorJobApplicationPreference;
