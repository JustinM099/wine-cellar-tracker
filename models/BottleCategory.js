//imports
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      // references product model's ID
      references: {
        model: 'product',
        key: 'id',
        unique: 'false'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      //references tag model's ID
      references: {
        model: 'tag',
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
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
