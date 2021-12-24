// import models
const Bottle = require('./Bottle');
const Category = require('./Category');
const User = require('./User')

// Bottle belongsTo Category
Bottle.belongsTo(Category, {
  foreignKey: 'category_id'
})
// Categories have many Bottles
Category.hasMany(Bottle, {
  foreignKey: 'category_id'
})

module.exports = {
  Bottle,
  Category,
  User,
};
 