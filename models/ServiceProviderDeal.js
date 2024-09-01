const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ServiceProviderDeal model
const ServiceProviderDeal = db.define('ServiceProviderDeal', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    service_provider_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    first_name: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    company_name: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    contact_method: {
        type: DataTypes.ENUM('phone', 'email'),
        allowNull: true
    },
    viewed: {
        type: DataTypes.INTEGER(10),
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
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'service_provider_deals',
    timestamps: false,
});

export default ServiceProviderDeal;
