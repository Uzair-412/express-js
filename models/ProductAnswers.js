const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProductAnswers model
const ProductAnswers = db.define('ProductAnswers', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    product_questions_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    vendor_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    customer_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'product_answers',
    timestamps: false
});

export default ProductAnswers;
