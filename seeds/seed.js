const seedCategories = require('./category-seeds');
const seedBottles = require('./bottle-seeds');
const seedUsers = require('./user-seeds')
// const seedBottleCategories = require('./bottle-category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  try{
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
 await seedUsers();
  console.log('\n--------USERS SEEDED---------\n')
  await seedBottles();
  console.log('\n----- BOTTLES SEEDED -----\n');
  }catch(err){
    console.log(err)
  }

  // await seedBottleCategories();
  // console.log('\n----- BOTTLE CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();