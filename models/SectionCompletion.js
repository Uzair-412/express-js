const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the SectionCompletion model
const SectionCompletion = db.define('SectionCompletion', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    module_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    section_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    completion_status: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 1
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'section_completion',
    timestamps: false,
    collate: 'utf8mb4_unicode_ci'
});

export default SectionCompletion;
