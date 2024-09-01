const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Contact model
const Contact = db.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        collate: 'utf8mb3_general_ci'
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        collate: 'utf8mb3_general_ci'
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
        collate: 'utf8mb3_general_ci'
    },
    company: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb3_general_ci'
    },
    enquiry_about: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb3_general_ci'
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
        collate: 'utf8mb3_general_ci'
    },
    type: {
        type: DataTypes.ENUM('Vet and Tech', 'DVM Central', 'VT Friends', 'Search A Vet'),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb3_general_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'contact',
    timestamps: false
});

export default Contact;
