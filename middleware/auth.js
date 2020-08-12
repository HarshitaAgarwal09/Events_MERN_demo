const config = reuire('config');
const jwt = require('jsonwebtoken');

function auth(re, res, next) {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json("Not Authenticated!");
    }
    try {
        const decoded = jwt.verify(token, config.get('JWTsecret'));
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(400).json({ msg: 'Token Not Valid' });
    }
}

module.exports = auth;