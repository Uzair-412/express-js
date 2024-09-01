import { DataTypes } from 'sequelize';
import db from "@lib/db";

const CartStorage = db.define('CartStorage', {
    id: {
        type: DataTypes.STRING(191),
        primaryKey: true,
        allowNull: false
    },
    cart_data: {
        type: DataTypes.LONGTEXT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'cart_storage',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default CartStorage;
