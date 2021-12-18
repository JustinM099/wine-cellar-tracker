const seedCategories = require('./category-seeds');
const seedBottles = require('./product-seeds');
const seedBottleCategories = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedBottles();
  console.log('\n----- BOTTLES SEEDED -----\n');

  await seedBottleCategories();
  console.log('\n----- BOTTLE CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();
