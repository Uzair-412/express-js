const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Programs model
const Programs = db.define('Programs', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
    },
    institute_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
    },
    director_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
    },
    discipline_code: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    accreditation_status_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    last_accreditation_visit: {
        type: DataTypes.STRING(6),
        allowNull: true
    },
    next_accreditation_visit: {
        type: DataTypes.STRING(6),
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
    tableName: 'programs',
    timestamps: false
});

export default Programs;
