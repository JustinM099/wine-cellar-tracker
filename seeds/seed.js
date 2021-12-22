const seedCategories = require('./category-seeds');
const seedBottles = require('./bottle-seeds');
// const seedBottleCategories = require('./bottle-category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedBottles();
  console.log('\n----- BOTTLES SEEDED -----\n');

  // await seedBottleCategories();
  // console.log('\n----- BOTTLE CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();