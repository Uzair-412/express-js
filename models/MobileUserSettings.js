const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the MobileUserSettings model
const MobileUserSettings = db.define('MobileUserSettings', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    push_notifications: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    order_updates: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    listing_updates: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    newsletter: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    personalized_content: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    privacy_activities: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    hide_my_likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    invisible_to_contacts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'mobile_user_settings',
    timestamps: false
});

export default MobileUserSettings;
