//imports
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class BottleCategory extends Model {}

BottleCategory.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bottle_id: {
      type: DataTypes.INTEGER,
      // references product model's ID
      references: {
        model: 'bottle',
        key: 'id',
        unique: 'false'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      //references tag model's ID
      references: {
        model: 'category',
        key: 'id',
        unique: 'false'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bottle_category',
  }
);

module.exports = BottleCategory;
