const { getUser } = require("../service/auth.service");


const restrictToLoggedinUserOnly = async (req, res, next) => {
    const userId = req.cookies?.uid;

    if(!userId) {
        console.log("User ID not found in cookies");
        return res.redirect('/login');
    }
    const user = getUser(userId)

    if(!user) {
        console.log("User not found in session");
        return res.redirect('/login');
    }

    req.user = user;
     next();
}
const checkAuth = async (req, res, next) => {
    const userId = req.cookies.uid;

    const user = getUser(userId)

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
}