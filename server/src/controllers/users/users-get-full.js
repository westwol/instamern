const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = async(req, res, next) => {
    try {
        
        const { username } = req.params;

        const user = await User.findOne({ username })
            .populate('friends', '-password');
        if (!user) {
            throw new Error('This username does not exist');
        }
    
        const posts = await Post.find({ poster: user._id })
            .populate('poster', '-password')
            .populate('comments.author', '-password')
            .sort({ 'created_at' : -1 })

        delete user.password;
        res.status(200).json({
            user,
            posts
        });
    } catch (error) {
        res.status(401).json(error.message);
    }
}