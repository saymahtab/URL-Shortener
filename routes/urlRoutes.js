const { Router } = require('express');
const { handleURL, handleViewClicks } = require('../controllers/url.controller');
const urlRoutes = Router();

urlRoutes.post('/', handleURL)
urlRoutes.post('/stats', handleViewClicks)

module.exports = {
    urlRoutes,
}