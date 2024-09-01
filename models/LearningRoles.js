const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the LearningRoles model
const LearningRoles = db.define('LearningRoles', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    is_coach_access: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_unicode_ci'
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
    tableName: 'learning_roles',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

export default LearningRoles;
