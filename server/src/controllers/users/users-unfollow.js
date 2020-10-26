const User = require('../../models/User');

module.exports = async(req, res, next) => {
    try { 
        const { userId } = req.body;
        const user = await User.findById(req.user._id);
        user.friends = user.friends.filter(friend => friend.toString() !== userId);
        await user.save();
        delete user.password;
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json(error.message);
    }
}