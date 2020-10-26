const express = require('express');
const router = express.Router();
const { isUserAuthenticated } = require('../middlewares');
const { UsersGetFull, UsersFind, UsersFollow, UsersUnfollow } = require('../controllers/users');

router.get('/:username', UsersGetFull);
router.get('/find/:keyword', UsersFind);
router.post('/follow', isUserAuthenticated, UsersFollow);
router.post('/unfollow', isUserAuthenticated, UsersUnfollow);

module.exports = router;
