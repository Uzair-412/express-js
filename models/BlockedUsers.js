import { DataTypes } from 'sequelize';
import db from "@lib/db";

const BlockedUsers = db.define('BlockedUser', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    blocked_user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
}, {
    tableName: 'blocked_users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default BlockedUsers;
