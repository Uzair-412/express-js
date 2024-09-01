const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the JobWishlists model
const JobWishlists = db.define('JobWishlists', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    job_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    tableName: 'job_wishlists',
    timestamps: false
});

export default JobWishlists;
