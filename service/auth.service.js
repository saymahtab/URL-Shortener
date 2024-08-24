const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
}

const getUser = (token) => {
    if (!token) return null; 

    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.error('JWT verification failed:', error.message);
        return null;
    }
}

module.exports = {
    generateToken,
    getUser,
}
