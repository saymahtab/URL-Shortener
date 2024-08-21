const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '15d'
    })
}
const getUser = (token) => {
    return jwt.verify(token , process.env.JWT_SECRET)
}
module.exports = {
    generateToken,
    getUser,
}

