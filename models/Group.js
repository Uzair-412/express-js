const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Group model
const Group = db.define('Group', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'groups',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default Group;
