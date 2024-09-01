import db from "@lib/db";
import { DataTypes } from "sequelize";

const ActivityLog = db.define('activity_log', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    log_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb4_unicode_ci',
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        collate: 'utf8mb4_unicode_ci',
    },
    subject_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    subject_type: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb4_unicode_ci',
    },
    causer_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    causer_type: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb4_unicode_ci',
    },
    properties: {
        type: DataTypes.TEXT('long'),
        allowNull: true,
        defaultValue: null,
        collate: 'utf8mb4_bin',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    }
}, {
    indexes: [{
            name: 'activity_log_log_name_index',
            fields: ['log_name'],
        },
        {
            name: 'subject',
            fields: ['subject_id', 'subject_type'],
        },
        {
            name: 'causer',
            fields: ['causer_id', 'causer_type'],
        },
    ],
    tableName: 'activity_log',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});


export default ActivityLog;