const bcrypt = require('bcrypt');
const User = require('../../models/Post');
const signToken = require('../../helpers/signToken');

module.exports = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error('This email has already been taken.');
        }
        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Creating user object
        const user = new User(req.body);
        // Setting hashed password
        user.password = hashedPassword;
        // Saving user to database
        let newUser = await user.save();
        // Setting token
        res.status(200).json({
            newUser,
            token: signToken(newUser, process.env.JWT_SECRET, "24h")
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}