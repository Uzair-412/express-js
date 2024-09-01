const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ProductQuestions model
const ProductQuestions = db.define('ProductQuestions', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    vendor_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    customer_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    product_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    service_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    question: {
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
    tableName: 'product_questions',
    timestamps: false
});

export default ProductQuestions;
