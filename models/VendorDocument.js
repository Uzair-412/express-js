// Filename: VendorDocument.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorDocument = db.define('VendorDocument', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    documents_questions: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    document: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'vendor_documents',
    timestamps: false,
});

export default VendorDocument;
