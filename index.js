const express = require('express');
const path = require('path')
require('dotenv').config();

const { staticRoutes } = require('./routes/staticRoutes');
const { urlRoutes } = require('./routes/urlRoutes');
const { connectMongo } = require('./DB/connect');
const { handleGetShortURL } = require('./controllers/url.controller');

const app = express();
const PORT = 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'))

//template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use('/', staticRoutes);
app.use('/url', urlRoutes);
app.get('/:shortID', handleGetShortURL)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectMongo(process.env.MONGO_URI)
})

