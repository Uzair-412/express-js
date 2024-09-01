// Filename: UserHobbiesInterests.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserHobbiesInterests = db.define('UserHobbiesInterests', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    hobbies: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    fav_tv_show: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    fav_movies: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    fav_games: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    fav_music: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    fav_books: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    fav_writers: {
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
    tableName: 'user_hobbies_interests',
    timestamps: false,
});

export default UserHobbiesInterests;
