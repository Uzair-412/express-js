// Filename: Team.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Team = db.define('Team', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    added_by: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    is_coach: {
        type: DataTypes.TINYINT(3),
        allowNull: false,
        defaultValue: 0,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'team',
    timestamps: false,
});

export default Team;
