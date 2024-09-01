const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ReviewImages model
const ReviewImages = db.define('ReviewImages', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    review_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    product_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    image: {
        type: DataTypes.STRING(45),
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
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'review_images',
    timestamps: false
});

export default ReviewImages;
