import db from "@lib/db";
import { DataTypes } from "sequelize";

const Associations = db.define('associations', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    address_line_1: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    address_line_2: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    country_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    phone_number: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    fax_number: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    uan: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    email_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    state_id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    zip: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: null,
    },
    is_mobile: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: null,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
}, {
    tableName: 'associations',
    timestamps: false,
});

export default Associations;