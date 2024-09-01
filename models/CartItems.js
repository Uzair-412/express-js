import { DataTypes } from 'sequelize';
import db from "@lib/db";

const CartItems = db.define('CartItems', {
    id: {
        type: DataTypes.BIGINT(19),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    customer_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    type: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    product_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    course_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        allowNull: true
    }
}, {
    tableName: 'cart_items',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default CartItems;
