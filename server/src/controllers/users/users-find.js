const User = require('../../models/User');

module.exports = async(req, res, next) => {
    try {
        const { keyword } = req.params;
        const users = await User.find({
            username: { 
                $regex: keyword, 
                $options: 'i'
            }})
            .select('username imageUrl')
            .limit(10);
        res.status(200).json(users);
    } catch (error) {
        res.status(401).json(error.message);
    }
}