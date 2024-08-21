const express = require('express');
const path = require('path')
require('dotenv').config();
const cookieParser = require('cookie-parser');

const { staticRoutes } = require('./routes/staticRoutes');
const { urlRoutes } = require('./routes/urlRoutes');
const { connectMongo } = require('./DB/connect');
const { handleGetShortURL } = require('./controllers/url.controller');
const { userRoutes } = require('./routes/user.routes');
const { restrictToLoggedinUserOnly, checkAuth } = require('./middlewares/auth.js');

const app = express();
const PORT = 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'))
app.use(cookieParser());

//template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

//routes
app.use('/', checkAuth,  staticRoutes);
app.use('/url', restrictToLoggedinUserOnly, urlRoutes);
app.get('/:shortID', handleGetShortURL)
app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectMongo(process.env.MONGO_URI)
})

