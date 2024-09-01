const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the PetsImages model
const PetsImages = db.define('PetsImages', {
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
    pet_image: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(50),
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
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'pets_images',
    timestamps: false
});

// Define associations
PetsImages.belongsTo(Pets, { foreignKey: 'pet_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

export default PetsImages;
