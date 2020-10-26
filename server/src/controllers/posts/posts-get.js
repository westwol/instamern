const Post = require('../../models/Post');

module.exports = async(req, res, next) => {
    try {
        // Pagination
        const resultsPerPage = 5;
        const page = parseInt(req.params.page) || 1;
        // Retrieve orders
        req.user.friends.push(req.user._id);
        const query = { poster: { $in: req.user.friends } }
        const posts = await Post.find(query)
            .populate('poster', '-password')
            .populate('comments.author', '-password')
            .sort({ 'created_at' : -1 })
            .skip(resultsPerPage * (page - 1))
            .limit(resultsPerPage);
        // Count total orders
        const numOfResults = await Post.countDocuments(query);
        const maxPages = Math.ceil(numOfResults / resultsPerPage)
        res.status(200).json({
            posts,
            maxPages
        });
    } catch (error) {
        console.log(error);
        res.status(401).json(error.message);
    }
}