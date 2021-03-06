const { User } = require('../models');

const seedUsers = () => {
  const userData = [
    {
      username: 'sven',
      email: 'sven@gmail.com',
      password: 'password12345',
    },
    {
      username: 'steve',
      email: 'steve@gmail.com',
      password: 'password12345',
    },
    {
      username: 'sally',
      email: 'sally@gmail.com',
      password: 'password12345',
    },
    {
      username: 'susan',
      email: 'susan@gmail.com',
      password: 'password12345',
    },
  ];

  return User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUsers;
