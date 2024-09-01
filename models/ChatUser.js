import { DataTypes } from 'sequelize';
import db from "@lib/db";

// Define the ChatUser model
const ChatUser = db.define('ChatUser', {
    chat_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    user_id: {
        type: DataTypes.BIGINT,
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
    tableName: 'chat_users',
    timestamps: false
});

export default ChatUser;
