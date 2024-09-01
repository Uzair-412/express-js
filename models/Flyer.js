const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Flyer model
const Flyer = db.define('Flyer', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    pdf_file: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    position: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true
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
    tableName: 'flyers',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default Flyer;
