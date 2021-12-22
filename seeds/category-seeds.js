const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Cabernet',
  },
  {
    category_name: 'Merlot',
  },
  {
    category_name: 'Cabernet Franc',
  },
  {
    category_name: 'Malbec',
  },
  {
    category_name: 'Petit Verdot',
  },
  {
    category_name: 'Syrah',
  },
  { 
    category_name: 'Grenache',
  },
  {
    category_name: 'Mourvedre',
  },
  {
    category_name: 'Chardonnay',
  },{
    category_name: 'Pinot Noir',
  },
  {
    category_name: 'Gamay',
  },
  {
    category_name: 'Sauvignon Blanc',
  },
  {
    category_name: 'Chenin Blanc',
  },
  {
    category_name: 'Semillon',
  },
  {
    category_name: 'Nebbiolo',
  },
  {
    category_name: 'Barbera',
  },
  {
    category_name: 'Dolcetto',
  },
  {
    category_name: 'Sangiovese',
  },
  {
    category_name: 'Other Italian Red',
  },
  {
    category_name: 'Pinot Gris',
  },
  {
    category_name: 'Pinot Blanc',
  },
  {
    category_name: 'Riesling',
  },
  {
    category_name: 'Gewurztraminer',
  },
  {
    category_name: 'Albarino',
  },
  {
    category_name: 'Verdejo',
  },
  {
    category_name: 'Muscat',
  },
  {
    category_name: 'Tempranillo',
  },
  {
    category_name: 'Other Red',
  },
  {
    category_name: 'Other White',
  },
  {
    category_name: 'Sparkling',
  },
  {
    category_name: 'Bordeaux Blend',
  },
  {
    category_name: 'Rhone Blend',
  },
  {
    category_name: 'Other Red Blend',
  },
  {
    category_name: 'Other White Blend',
  },
  {
    category_name: 'Fortified',
  },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
