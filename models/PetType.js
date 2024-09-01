const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PetType model
const PetType = db.define('PetType', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    pet_disese_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    status: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: '1'
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
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'pet_type',
    timestamps: false
});

export default PetType;
