import { DataTypes } from 'sequelize';
import db from "@lib/db";

const BlogCategories = db.define('BlogCategories', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y'
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
    tableName: 'blog_categories',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default BlogCategories;
