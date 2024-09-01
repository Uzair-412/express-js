const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PetAttachments model
const PetAttachments = db.define('PetAttachments', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    pet_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    attachment: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    attachment_type: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
    tableName: 'pet_attachments',
    timestamps: false
});

export default PetAttachments;
