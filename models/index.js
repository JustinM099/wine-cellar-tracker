// import models
const Bottle = require('./Bottle');
const Category = require('./Category');

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
};
 