// Filename: VendorJobCategory.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorJobCategory = db.define('VendorJobCategory', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    job_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
}, {
    tableName: 'vendor_job_categories',
    timestamps: false,
});

export default VendorJobCategory;
