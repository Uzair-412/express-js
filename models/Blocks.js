import { DataTypes } from 'sequelize';
import db from "@lib/db";

const Blocks = db.define('Block', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    position: {
        type: DataTypes.INTEGER(10),
        defaultValue: 0,
        allowNull: false
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
    tableName: 'blocks',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Blocks;
