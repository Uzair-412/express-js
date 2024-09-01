import { DataTypes } from 'sequelize';
import db from "@lib/db";

const BlockCategories = db.define('BlockCategories', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    block_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER(10),
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
    tableName: 'block_categories',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default BlockCategories;
