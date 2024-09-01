// Filename: UserDocumentsThreads.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserDocumentsThreads = db.define('UserDocumentsThreads', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    level: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    sender_type: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'user_documents_threads',
    timestamps: false,
});

export default UserDocumentsThreads;
