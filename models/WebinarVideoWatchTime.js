// Filename: WebinarVideoWatchTime.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const WebinarVideoWatchTime = db.define('WebinarVideoWatchTime', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    webinar_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    watch_time: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    video_duration: {
        type: DataTypes.STRING(64),
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
    tableName: 'webinar_video_watch_time',
    timestamps: false,
});

export default WebinarVideoWatchTime;
