import db from "@lib/db";
import { DataTypes } from "sequelize";

const Addresses = db.define('addresses', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    customer_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    vendor_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    first_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    last_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    company: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    address1: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    address2: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    city: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    country: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    country_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    state: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    state_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    zip: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    address_type: {
        type: DataTypes.ENUM('manual', 'google'),
        allowNull: true,
        defaultValue: 'manual',
    },
    phone: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    vat: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    default_billing: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: null,
    },
    default_shipping: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: null,
    },
    latitude: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    longitude: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    timezone: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
}, {
    tableName: 'addresses',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default Addresses;