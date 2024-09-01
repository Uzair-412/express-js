// Filename: WebinarRegistration.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const WebinarRegistration = db.define('WebinarRegistration', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    webinar_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        collate: 'utf8mb4_general_ci',
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        collate: 'utf8mb4_general_ci',
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_general_ci',
    },
    company: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb3_general_ci',
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        collate: 'utf8mb3_general_ci',
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb3_general_ci',
    },
    country: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb3_general_ci',
    },
    state: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    zip_code: {
        type: DataTypes.STRING(10),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    veterinarian: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
    },
    license: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
    },
    special_interest: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    speciality: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    additional_comments: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    role: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    veterinary_licence_number: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    license_issuing_state: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    heard_from: {
        type: DataTypes.STRING(45),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    registered_from: {
        type: DataTypes.ENUM('DVM Central', 'Vet and Tech'),
        allowNull: true,
        defaultValue: 'Vet and Tech',
        collate: 'utf8mb4_general_ci',
    },
    raffle: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'utf8mb4_general_ci',
    },
    created_at: {
        type: DataTypes.DATETIME,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'webinar_registrations',
    timestamps: false,
});

export default WebinarRegistration;
