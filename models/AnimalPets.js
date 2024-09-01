import db from "@lib/db";
import { DataTypes } from "sequelize";

const Appointments = db.define('appointments', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    customer_name: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    customer_email: {
        type: DataTypes.STRING(48),
        allowNull: false,
    },
    customer_mobile: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null,
    },
    position: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    clinic_name: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    subject: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    booking_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    time_serial: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    time_meridiem: {
        type: DataTypes.ENUM('am', 'pm'),
        allowNull: true,
        defaultValue: null,
    },
    user_current_time: {
        type: DataTypes.STRING(190),
        allowNull: true,
        defaultValue: null,
    },
    vendor_current_time: {
        type: DataTypes.STRING(190),
        allowNull: true,
        defaultValue: null,
    },
    is_complete: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },
    status: {
        type: DataTypes.ENUM('pending', 'accepted', 'declined'),
        allowNull: false,
        defaultValue: 'pending',
    },
    type: {
        type: DataTypes.ENUM('meeting', 'job'),
        allowNull: false,
        defaultValue: 'meeting',
    },
    uploaded: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    is_delete: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: '1->YES, 0->NO',
    },
    delete_by_vendor: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    delete_by_admin: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    channel: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
}, {
    tableName: 'appointments',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default Appointments;