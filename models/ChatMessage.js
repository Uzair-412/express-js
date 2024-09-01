import { DataTypes } from 'sequelize';
import db from "@lib/db";

// Define the ChatMessage model
const ChatMessage = db.define('ChatMessage', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    chat_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    resp_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    deleted_from_receiver: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'N',
        allowNull: true
    },
    deleted_from_sender: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'N',
        allowNull: true
    },
    is_seen: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'N',
        allowNull: true
    },
    responseUserNewMsg: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
        allowNull: true
    },
    senderUserNewMessage: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
        allowNull: true
    },
    responseUserNewMsgBadge: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
        allowNull: true
    },
    senderUserNewMessageBadge: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
        allowNull: true
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    message_type: {
        type: DataTypes.ENUM('Customer', 'Vendor', 'User'),
        defaultValue: 'Customer',
        allowNull: true
    },
    user_type: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
    }
}, {
    tableName: 'chat_messages',
    timestamps: false
});

export default ChatMessage;
