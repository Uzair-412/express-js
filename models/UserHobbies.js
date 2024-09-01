// Filename: UserHobbies.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserHobbies = db.define('UserHobbies', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    hobbies: {
        type: DataTypes.STRING(200),
        allowNull: false,
        collate: 'utf8mb3_general_ci',
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'Y',
        collate: 'utf8mb3_general_ci',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'user_hobbies',
    timestamps: false,
});

export default UserHobbies;
