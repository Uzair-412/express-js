const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the SalaryTypes model
const SalaryTypes = db.define('SalaryTypes', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: true
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
    tableName: 'salary_types',
    timestamps: false
});

export default SalaryTypes;
