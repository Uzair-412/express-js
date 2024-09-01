// Filename: VTGroupMember.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VTGroupMember = db.define('VTGroupMember', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    group_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    follow: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 1,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'vt_groups_members',
    timestamps: false,
});

export default VTGroupMember;
