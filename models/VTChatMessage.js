// Filename: VTChatMessage.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VTChatMessage = db.define('VTChatMessage', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    chat_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    resp_user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    deleted_from_receiver: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    deleted_from_sender: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    is_seen: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    message: {
        type: DataTypes.TEXT,
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
    tableName: 'vt_chat_messages',
    timestamps: false,
});

export default VTChatMessage;
