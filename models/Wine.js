// import important parts of sequelize library
const { Model, DataTypes, STRING, FLOAT, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Name of Producer. Vintage. Varietal/Blend. Region. Name of Wine. Tasting Notes. Reviews. Red/White/Rose/Sparkling. Cellar Location. Number of Bottles.
// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Bottle.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    producer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vintage: {
      type: DataTypes.INTEGER,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      //references the Category model's ID
      references: {
        model: 'category',
        key: 'id',
      }
    }
    
      
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
