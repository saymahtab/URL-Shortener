const { Router } = require('express');
const { handleHomePage, handleStats } = require('../controllers/homeController');
const staticRoutes = Router();

staticRoutes.get('/', handleHomePage);
staticRoutes.get('/stats', handleStats)

module.exports = {
    staticRoutes,
}