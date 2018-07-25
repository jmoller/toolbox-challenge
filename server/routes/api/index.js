const routes = require('express').Router();
const textRoute = require('../texts');

routes.use('/texts', textRoute);

module.exports = routes;