const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Jobs model
const Jobs = db.define('Jobs', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    queue: {
        type: DataTypes.STRING(191),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    payload: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    attempts: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    reserved_at: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    available_at: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    created_at: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    tableName: 'jobs',
    collate: 'utf8mb4_unicode_ci',
    indexes: [
        {
            name: 'jobs_queue_index',
            fields: ['queue'],
            using: 'BTREE'
        }
    ],
    timestamps: false
});

export default Jobs;
