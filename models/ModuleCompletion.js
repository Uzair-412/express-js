const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ModuleCompletion model
const ModuleCompletion = db.define('ModuleCompletion', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    module_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    completion_status: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 1
    },
    is_mark: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 0
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    tableName: 'module_completion',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default ModuleCompletion;
