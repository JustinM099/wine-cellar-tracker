// import important parts of sequelize library
const { Model, DataTypes, STRING, FLOAT, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Name of Producer. Vintage. Varietal/Blend (Category). Region. Name of Wine. Tasting Notes. Reviews. Red/White/Rose/Sparkling. (Style) Cellar Location. Number of Bottles.
// Initialize Product model (table) by extending off Sequelize's Model class
class Bottle extends Model {}

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
      allowNull: false
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tasting_notes: {
      type: DataTypes.STRING,
    },
    style: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cellar_location: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

module.exports = Bottle;
