const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Faq model
const Faq = db.define('Faq', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    set_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
    },
    question: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    in_home: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true
    },
    position: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('vetandtech', 'dvmcentral', 'vtfriends', ''),
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
    tableName: 'faqs',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

export default Faq;
