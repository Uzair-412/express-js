// Filename: VendorJobCommunicationSetting.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorJobCommunicationSetting = db.define('VendorJobCommunicationSetting', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    application_preference_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    tableName: 'vendor_job_communication_settings',
    timestamps: false,
});

export default VendorJobCommunicationSetting;
