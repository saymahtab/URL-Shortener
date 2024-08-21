const { URL } = require("../models/url.model");

const handleHomePage = async (req, res) => {
    res.render('home');
}
const handleStats = async (req, res) => {
    res.render('stats')
}
const handleMyUrls = async (req, res) => {
    if(!req.user) return res.redirect('/login')
    const urls = await URL.find({ createdBy: req.user._id});
    res.render('myUrls', {
        urls: urls
    })
}


const handleSignup = async (req, res) => {
    res.render('signup')
}
const handleLogin = async (req, res) => {
    res.render('login')
}

module.exports = {
    handleHomePage,
    handleStats,
    handleSignup,
    handleLogin,
    handleMyUrls,
}