
const { Model, DataTypes, STRING, FLOAT, INTEGER } = require('sequelize');

const sequelize = require('../config/connection');

class Bottle extends Model {}

// set up fields and rules for Bottle model
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
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wine_name: {
      type: DataTypes.STRING,
    },
    tasting_notes: {
      type: DataTypes.STRING,
    },
    reviews: {
      type: DataTypes.STRING,
    },
    wine_type: {
      type: DataTypes.STRING,
    },
    cellar_location: {
      type: DataTypes.STRING,
    },
    category_id: {
      type: DataTypes.INTEGER,
      //references the Category model's ID
      references: {
        model: 'category',
        key: 'id',
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bottle',
  }
);

module.exports = Bottle;
