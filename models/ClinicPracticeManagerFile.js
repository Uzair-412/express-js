
const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ClinicPracticeManagerFile model
const ClinicPracticeManagerFile = db.define('ClinicPracticeManagerFile', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    clinic_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    doctor_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    file_path: {
        type: DataTypes.STRING(191),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    video_thumbnail: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    type: {
        type: DataTypes.STRING(191),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
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
    tableName: 'clinic_practice_manager_files',
    timestamps: false
});

export default ClinicPracticeManagerFile;
