const express = require('express');
const { handleUserSignup, handleUserLogin } = require('../controllers/user.controller');

const userRoutes = express.Router();

userRoutes.post('/', handleUserSignup)
userRoutes.post('/login', handleUserLogin)

module.exports = {
    userRoutes,
}