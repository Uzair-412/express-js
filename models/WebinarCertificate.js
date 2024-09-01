// Filename: WebinarCertificate.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const WebinarCertificate = db.define('WebinarCertificate', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    webinar_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    certificate: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'webinar_certificates',
    timestamps: false,
});

export default WebinarCertificate;
