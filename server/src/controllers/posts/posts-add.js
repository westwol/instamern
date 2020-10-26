const Post = require('../../models/Post');

module.exports = async(req, res, next) => {
    try {
        const post = new Post(req.body);
        post.poster = req.user._id;
        let newPost = await post.save();
        Post.populate(newPost, 'poster', function(err) {
            return res.status(201).json(newPost);
        });
    } catch (error) {
        res.status(401).json(error.message);
    }
}