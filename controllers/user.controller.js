const { User } = require("../models/user.model");
const { generateToken } = require("../service/auth.service");

const handleUserSignup = async (req, res) => {
    const { name, email, passward } = req.body;
    await User.create({
        name,
        email,
        passward,
    })
    return res.render('home')
}
const handleUserLogin = async (req, res) => {
    const { email, passward } = req.body;
    const user = await User.findOne({ email, passward });
    if(!user) {
        return res.render('login', {
            error: 'Invalid Username or Passward',
        })
    }
    const token = generateToken(user); 

    res.cookie('uid', token)
    res.redirect('/')
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}