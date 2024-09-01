const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the HelpCentreChat model
const HelpCentreChat = db.define('HelpCentreChat', {
    helpchat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    helpchat_help_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    helpchat_by_admin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: 'user id'
    },
    helpchat_file: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    helpchat_message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    helpchat_by_vendor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: 'vendor id'
    },
    helpchat_to_admin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    helpchat_seen: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    helpchat_created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    helpchat_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'help_centre_chats',
    timestamps: false
});

export default HelpCentreChat;
