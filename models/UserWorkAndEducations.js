// Filename: UserWorkAndEducations.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserWorkAndEducations = db.define('UserWorkAndEducations', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('work', 'education', 'skill'),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    education_level: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    city: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    country: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    state: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    current_status: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 0,
    },
    from_year: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    to_year: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'user_work_and_educations',
    timestamps: false,
});

export default UserWorkAndEducations;
