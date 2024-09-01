// Filename: VendorJob.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorJob = db.define('VendorJob', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    country_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    state_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    zip_code: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    working_time_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    salary: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    salary_type: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    num_of_position: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 1,
    },
    job_duration: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    application_start_time: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    application_end_time: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    urgent_hiring: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
    },
    general_questions: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    platform: {
        type: DataTypes.ENUM('dvm', 'vetandtech'),
        allowNull: true,
        defaultValue: 'dvm',
    },
    minimum_education_level_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    required_experience_num: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    required_experience_duration: {
        type: DataTypes.ENUM('Month', 'Year'),
        allowNull: true,
    },
    required_experience_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    created_time: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    process: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 1,
        comment: '1 for details, 2 for preferences, 3 for prescreening, 4 for completed',
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    previous_slug: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    process_current: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 1,
        comment: '1 for details, 2 for preferences, 3 for prescreening, 4 for completed',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: 'CURRENT_TIMESTAMP',
    },
}, {
    tableName: 'vendor_jobs',
    timestamps: false,
});

export default VendorJob;
