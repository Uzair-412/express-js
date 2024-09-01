import { DataTypes } from 'sequelize';
import db from "@lib/db";

const BlogPosts = db.define('BlogPosts', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    categories: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    writer_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        unique: true
    },
    tags: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    heading_content: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    short_content: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    full_content: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    reading_time: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null
    },
    image_thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null
    },
    publish_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    display_on: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: '1'
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
    },
    schema: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    sponsored_product_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    upcoming_event_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    featured_blog_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
}, {
    tableName: 'blog_posts',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default BlogPosts;
