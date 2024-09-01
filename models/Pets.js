const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Pets model
const Pets = db.define('Pets', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    pet_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    pet_age: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    zip: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    state: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    country: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    video: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    thumbnail: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    pet_created_time: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    from_vtfriends: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
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
    tableName: 'pets',
    timestamps: false
});

export default Pets;
