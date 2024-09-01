const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProgramsInstitutes model
const ProgramsInstitutes = db.define('ProgramsInstitutes', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    address_line_1: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    address_line_2: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    country_id: {
        type: DataTypes.MEDIUMINT(7).UNSIGNED,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    state_id: {
        type: DataTypes.MEDIUMINT(7).UNSIGNED,
        allowNull: false
    },
    zip: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    url: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'programs_institutes',
    timestamps: false
});

export default ProgramsInstitutes;
