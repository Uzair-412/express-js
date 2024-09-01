const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Pages model
const Pages = db.define('Pages', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    heading: {
        type: DataTypes.STRING(128),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    content: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    page_header_content: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    type: {
        type: DataTypes.ENUM('vetandtech', 'dvmcentral', 'vtfriends', ''),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    schema: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    meta_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    meta_keywords: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    meta_description: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'latin1_swedish_ci'
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
    tableName: 'pages',
    collate: 'latin1_swedish_ci',
    timestamps: false
});

module.exports = Pages;
