const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the FormSubmission model
const FormSubmission = db.define('FormSubmission', {
    id: {
        type: DataTypes.INTEGER,
        unsigned: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    first_name: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    company: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    zip: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    custom_fields: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    viewed: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    winner: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
    },
    winner_mail_sent: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N'
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
    tableName: 'form_submissions',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default FormSubmission;
