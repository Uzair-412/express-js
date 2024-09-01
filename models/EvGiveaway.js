const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the EvGiveaway model
const EvGiveaway = db.define('EvGiveaway', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ev_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    link: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    image1: {
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
        defaultValue: DataTypes.NOW,
        onUpdate: 'CURRENT_TIMESTAMP'
    }
}, {
    tableName: 'ev_giveaways',
    timestamps: false
});

export default EvGiveaway;
