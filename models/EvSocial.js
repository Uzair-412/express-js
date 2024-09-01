const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the EvSocial model
const EvSocial = db.define('EvSocial', {
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
    sm_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true
    },
    link: {
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
    tableName: 'ev_social',
    timestamps: false
});

export default EvSocial;
