const { Router } = require('express');
const { handleHomePage, handleStats, handleSignup, handleLogin, handleMyUrls } = require('../controllers/homeController');
const staticRoutes = Router();

staticRoutes.get('/', handleHomePage);
staticRoutes.get('/stats', handleStats)
staticRoutes.get('/myUrls', handleMyUrls)


staticRoutes.get('/signup', handleSignup)
staticRoutes.get('/login', handleLogin)

module.exports = {
    staticRoutes,
}