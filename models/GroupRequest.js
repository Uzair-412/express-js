const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the GroupRequest model
const GroupRequest = db.define('GroupRequest', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    admin_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    group_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'accepted', 'rejected', 'cancel', 'left', 'removed'),
        allowNull: false,
        defaultValue: 'pending'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'group_requests',
    collate: 'utf8mb3_general_ci',
    timestamps: false
});

export default GroupRequest;
