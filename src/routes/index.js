const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');
const carRouter = require('./car.router');

// colocar las rutas aquí
router.use(userRouter);
router.use(carRouter);

module.exports = router;