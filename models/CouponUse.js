const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CouponUse model
const CouponUse = db.define('CouponUse', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    coupon_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    coupon: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
        collate: 'latin1_swedish_ci'
    },
    customer_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: null
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'coupons_uses',
    timestamps: false
});

export default CouponUse;
