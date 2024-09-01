import { DataTypes } from 'sequelize';
import db from "@lib/db";

const Cache = db.define('Cache', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    key: {
        type: DataTypes.STRING(191),
        allowNull: false,
        unique: true
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    expiration: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    }
}, {
    tableName: 'cache',
    timestamps: false
});

export default Cache;
