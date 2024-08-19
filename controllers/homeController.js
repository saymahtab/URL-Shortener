
const handleHomePage = async (req, res) => {
    res.render('home');
}
const handleStats = async (req, res) => {
    res.render('stats')
}

module.exports = {
    handleHomePage,
    handleStats,
}