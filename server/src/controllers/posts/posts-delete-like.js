const Post = require('../../models/Post');

module.exports = async(req, res, next) => {
    try {
        const { postId } = req.body;
        const post = await Post.findById(postId)
        if (!post) {
            throw new Error('This post does not exist');
        }
        post.likes = post.likes.filter(like => like.userId.toString() !== req.user._id.toString());
        const savedPost = await post.save();
        return res.status(201).json(savedPost);
    } catch (error) {
        console.log(error);
        res.status(401).json(error.message);
    }
    
}