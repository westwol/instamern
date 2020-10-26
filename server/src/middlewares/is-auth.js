const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config( { path: 'variables.env' });

module.exports = async(req, res, next) => {
    try {
        const token = req.headers['x-auth-token'];
        // Verifying if jwt is valid
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // Gathering user information
        const user = await User.findOne({ email: decodedToken.email })
            .select('username email imageUrl friends')
            .lean();
        if (!user) {
            throw new Error('Your token is either expired or invalid');
        }
        req.user = user;
        next()
    } catch (error) {
        res.status(401).json(error.message);
    }
}