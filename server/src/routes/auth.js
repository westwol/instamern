const express = require('express');
const router = express.Router();
const { isUserAuthenticated } = require('../middlewares');
const { AuthLogin, AuthSignup, AuthIsMe } = require('../controllers/auth');

router.post('/login', AuthLogin);
router.post('/signup', AuthSignup);
router.get('/me', isUserAuthenticated, AuthIsMe);

module.exports = router;
