const express = require('express');
const { getHomes, getBookings, getIndex, getFavList } = require('../controllers/storeController');
const storeRouter = express.Router();

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourites", getFavList);

module.exports = storeRouter;