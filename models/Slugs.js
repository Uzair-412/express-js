// Filename: Slug.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Slugs = db.define('Slug', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    slug: {
        type: DataTypes.STRING(191),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci',
        unique: true
    },
    sluggable_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
    },
    sluggable_type: {
        type: DataTypes.STRING(191),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    tableName: 'slugs',
    timestamps: false,
    collate: 'utf8mb4_unicode_ci'
});

export default Slugs;
