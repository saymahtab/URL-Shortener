const mongoose = require('mongoose');

const connectMongo = async (url) => {
    try {
        const conn = mongoose.connect(url);
        console.log(`MongoDB Connected`)
    } 
    catch (err) {
        console.log(`Error in Connection to MongoDB ${err}`)
        process.exit(1);
    }
}

module.exports = {
    connectMongo,
}   