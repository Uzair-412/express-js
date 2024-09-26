const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the CategoryProduct model
const CategoryProduct = db.define('CategoryProduct', {
    product_id: {
      type: DataTypes.INTEGER,
      
    },
    category_id: {
      type: DataTypes.INTEGER,
      
    }
  });
// Optionally, define associations if needed
// CategoryProduct.belongsTo(Category, { foreignKey: 'category_id' });
// CategoryProduct.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = CategoryProduct;
