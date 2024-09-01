import db from "@lib/db";
import { DataTypes } from "sequelize";

const Audits = db.define('audits', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user_type: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
    user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    event: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },
    auditable_type: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },
    auditable_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
    },
    old_values: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    new_values: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    ip_address: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
    },
    user_agent: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
    tags: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'audits',
    indexes: [{
            unique: false,
            fields: ['auditable_type', 'auditable_id'],
        },
        {
            unique: false,
            fields: ['user_id', 'user_type'],
        },
    ],
    timestamps: false,
});

export default Audits;