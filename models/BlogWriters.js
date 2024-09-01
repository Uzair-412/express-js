import { DataTypes } from 'sequelize';
import db from "@lib/db";

const BlogWriters = db.define('BlogWriters', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null
    },
    image: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null
    },
    designation: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null
    },
    bio_link: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false
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
    tableName: 'blog_writers',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default BlogWriters;
