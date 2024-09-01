// Filename: VendorSchedule.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VendorSchedule = db.define('VendorSchedule', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    full_start_time: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    end_time: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    full_end_time: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    start_time_meridiem: {
        type: DataTypes.ENUM('am', 'pm'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    end_time_meridiem: {
        type: DataTypes.ENUM('am', 'pm'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    time_duration: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: '30 minutes',
    },
    allowed_lunch: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    allowed_lunch_amount: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'vendor_schedule',
    timestamps: false,
});

export default VendorSchedule;
