// Filename: VTChat.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VTChat = db.define('VTChat', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
    },
    channel: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
    user_ids: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    last_message: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    sender_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
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
    tableName: 'vt_chats',
    timestamps: false,
});

export default VTChat;
