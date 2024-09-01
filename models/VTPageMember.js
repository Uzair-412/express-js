// Filename: VTPageMember.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VTPageMember = db.define('VTPageMember', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    page_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
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
    tableName: 'vt_pages_members',
    timestamps: false,
});

export default VTPageMember;
