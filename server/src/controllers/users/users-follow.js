const User = require('../../models/User');

module.exports = async(req, res, next) => {
    try { 
        const { userId } = req.body;
        const user = await User.findById(req.user._id);
        const newFriends = user.friends.find(friend => friend.toString() === userId.toString()) ? user.friends : [ ...user.friends, userId ]
        user.friends = newFriends;
        await user.save();
        delete user.password;
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json(error.message);
    }
}