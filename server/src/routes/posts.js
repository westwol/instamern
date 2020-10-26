const express = require('express');
const router = express.Router();
const { isUserAuthenticated } = require('../middlewares');
const { PostsAdd, PostsGet, PostsNewComment, PostsNewLike, PostsDeleteLike } = require('../controllers/posts');

router.get('/:page', isUserAuthenticated, PostsGet);
router.post('/', isUserAuthenticated, PostsAdd);
router.post('/comment/new', isUserAuthenticated, PostsNewComment);
router.post('/like/new', isUserAuthenticated, PostsNewLike);
router.post('/like/delete', isUserAuthenticated, PostsDeleteLike);

module.exports = router;
