const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Session model
const Session = db.define('Session', {
    id: {
        type: DataTypes.STRING(191),
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    ip_address: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    user_agent: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    payload: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    last_activity: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    }
}, {
    tableName: 'sessions',
    timestamps: false,
    collate: 'utf8mb4_unicode_ci'
});

export default Session;
