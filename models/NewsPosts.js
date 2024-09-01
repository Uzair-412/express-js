const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the NewsPosts model
const NewsPosts = db.define('NewsPosts', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    heading_content: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    short_content: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    full_content: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    image_thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    top_image_banner: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'latin1_swedish_ci'
    },
    publish_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
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
    tableName: 'news_posts',
    collate: 'latin1_swedish_ci',
    timestamps: false,
    indexes: [
        {
            name: 'slug',
            unique: true,
            fields: ['slug']
        }
    ]
});

export default NewsPosts;
