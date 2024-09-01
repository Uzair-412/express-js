import { DataTypes } from 'sequelize';
import db from "@lib/db";

// Define the Chat model
const Chat = db.define('Chat', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    channel: {
        type: DataTypes.STRING(40),
        allowNull: true
    },
    user_ids: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        defaultValue: 'Y',
        allowNull: true
    },
    last_message: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    deleted_for: {
        type: DataTypes.STRING(255),
        defaultValue: '0',
        allowNull: true
    },
    sender_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    un_read_chats: {
        type: DataTypes.ENUM('0', '1'),
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
    tableName: 'chats',
    timestamps: false
});

export default Chat;
