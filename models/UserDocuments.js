// Filename: UserDocuments.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserDocuments = db.define('UserDocuments', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    size: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    level: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    user_documents_threads_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    submit: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'user_documents',
    timestamps: false,
});

export default UserDocuments;
