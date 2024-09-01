const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the EventAttendee model
const EventAttendee = db.define('EventAttendee', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    event_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    attendee_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    event_fee: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'event_attendees',
    timestamps: false
});

export default EventAttendee;
