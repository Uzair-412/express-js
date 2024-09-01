import { DataTypes } from 'sequelize';
import db from "@lib/db";

const CandidatesAppliedJobs = db.define('CandidatesAppliedJobs', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    age: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    contact: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    cover_letter: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    vendor_job_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    customer_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    education_level_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    resume_file: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    years_of_experience: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    status: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    applied_time: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
    }
}, {
    tableName: 'candidates_applied_jobs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default CandidatesAppliedJobs;
