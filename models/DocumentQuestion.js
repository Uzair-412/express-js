const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the DocumentQuestion model
const DocumentQuestion = db.define('DocumentQuestion', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    question: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'document_questions',
    timestamps: false
});

export default DocumentQuestion;
