// Filename: VendorJobType.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorJobType = db.define('VendorJobType', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    job_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    job_type_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
}, {
    tableName: 'vendor_job_types',
    timestamps: false,
});

export default VendorJobType;
