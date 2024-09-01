import db from "@lib/db";
import { DataTypes } from "sequelize";
import User from "./User";

const Friends = db.define('Friends', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    friend_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
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
    tableName: 'friends',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Friends.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Friends.belongsTo(User, { foreignKey: 'friend_id', as: 'friend' });

export default Friends;
