const bcrypt = require('bcrypt');
const User = require('../../models/User');
const signToken = require('../../helpers/signToken');
require('dotenv').config({ path: 'config.env' });

module.exports = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        // Check if user exists
        const userExists = await User.findOne({ email: email })
            .select('username email imageUrl friends password')
            .lean();
        if (!userExists) {
            throw new Error('The email or password entered appears to be invalid.');
        }
        // Check for password validation
        const isPasswordValid = await bcrypt.compare(password, userExists.password);
        if (!isPasswordValid) {
            throw new Error('The email or password entered appears to be invalid.');
        }
        userExists.token = signToken(userExists, process.env.JWT_SECRET, "24h");
        delete userExists.password;
        res.status(200).json(userExists);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}