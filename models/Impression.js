const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Impression model
const Impression = db.define('Impression', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    service_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
    },
    search_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    listing_count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    side_modal_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
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
    tableName: 'impressions',
    timestamps: false
});

export default Impression;
