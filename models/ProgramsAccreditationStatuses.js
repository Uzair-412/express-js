const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProgramsAccreditationStatuses model
const ProgramsAccreditationStatuses = db.define('ProgramsAccreditationStatuses', {
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
    tableName: 'programs_accreditation_statuses',
    timestamps: false
});

export default ProgramsAccreditationStatuses;
