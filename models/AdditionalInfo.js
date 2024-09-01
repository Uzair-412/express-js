import db from "@lib/db";
import { DataTypes } from "sequelize";

const AdditionalInfo = db.define('additional_info', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    info_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    info_text: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci',
    },
}, {
    tableName: 'additional_info',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default AdditionalInfo;