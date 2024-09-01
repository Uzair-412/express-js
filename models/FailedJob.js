const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the FailedJob model
const FailedJob = db.define('FailedJob', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    connection: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    queue: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    payload: {
        type: DataTypes.LONGTEXT,
        allowNull: false
    },
    exception: {
        type: DataTypes.LONGTEXT,
        allowNull: false
    },
    failed_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'failed_jobs',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['uuid']
        }
    ]
});

export default FailedJob;
