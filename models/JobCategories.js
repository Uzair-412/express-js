const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the JobCategories model
const JobCategories = db.define('JobCategories', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
    },
    type: {
        type: DataTypes.ENUM('dvm_central', 'vetandtech'),
        allowNull: true,
        defaultValue: null,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'job_categories',
    timestamps: false
});

export default JobCategories;
