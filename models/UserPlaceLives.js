// Filename: UserPlaceLives.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserPlaceLives = db.define('UserPlaceLives', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    current_city: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    zip_code: {
        type: DataTypes.STRING(20),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    address: {
        type: DataTypes.STRING(64),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    current_country: {
        type: DataTypes.STRING(75),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    current_state: {
        type: DataTypes.STRING(75),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    home_town: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    home_town_country: {
        type: DataTypes.STRING(75),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    home_town_state: {
        type: DataTypes.STRING(75),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    move_year: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    move_month: {
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
    tableName: 'user_place_lives',
    timestamps: false,
});

export default UserPlaceLives;
