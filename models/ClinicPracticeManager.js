import { DataTypes } from 'sequelize';
import db from "@lib/db";

// Define the ClinicPracticeManager model
const ClinicPracticeManager = db.define('ClinicPracticeManager', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    doctor_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    clinic_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    template_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    email: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    phone: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    url: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_unicode_ci'
    },
    logo: {
        type: DataTypes.STRING(111),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    header_image: {
        type: DataTypes.STRING(111),
        allowNull: true,
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
    tableName: 'clinic_practice_managers',
    timestamps: false
});

export default ClinicPracticeManager;
