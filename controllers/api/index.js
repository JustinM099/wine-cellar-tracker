const router = require('express').Router();

const userRoutes = require('./userRoutes');
//const mailRoute = require('./mailRoute');

router.use('/users', userRoutes);
//router.use('/mailRoute', mailRoute);

module.exports = router;
