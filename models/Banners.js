import db from "@lib/db";
import { DataTypes } from "sequelize";

const Banners = db.define('banners', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    area_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci',
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci',
    },
    image_amp: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci',
    },
    link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci',
    },
    banner_text: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci',
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    date_start: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null,
    },
    date_end: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'latin1_swedish_ci',
    },
    show_on: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 3,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'banners',
    timestamps: false,
});

export default Banners;