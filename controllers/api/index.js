const router = require('express').Router();

const userRoutes = require('./userRoutes');
const bottleRoutes = require('./bottleRoutes')
//const mailRoute = require('./mailRoute');

router.use('/users', userRoutes);
router.use('/bottle', bottleRoutes)
//router.use('/mailRoute', mailRoute);

module.exports = router;
