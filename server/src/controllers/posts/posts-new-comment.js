const Post = require('../../models/Post');

module.exports = async(req, res, next) => {
    try {
        const { postId, content } = req.body;
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error('This post does not exist');
        }
        post.comments.push({
            author: req.user._id,
            content: content,
            created_at: new Date()
        })
        const savedPost = await post.save();
        Post.populate(savedPost, 'comments.author', function(err) {
            return res.status(201).json(savedPost);
        });
    } catch (error) {
        console.log(error);
        res.status(401).json(error.message);
    }
    
}