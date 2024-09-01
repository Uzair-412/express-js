import { DataTypes } from 'sequelize';
import db from "@lib/db";

// Define the CategoryProduct model
const CategoryProduct = db.define('CategoryProduct', {
    category_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    product_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    }
}, {
    tableName: 'category_product',
    timestamps: false // This table does not need timestamps
});

// Optionally, define associations if needed
// CategoryProduct.belongsTo(Category, { foreignKey: 'category_id' });
// CategoryProduct.belongsTo(Product, { foreignKey: 'product_id' });

export default CategoryProduct;
