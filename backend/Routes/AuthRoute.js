const express = require('express');
const router = express.Router();
const { userVerification } = require('../Middlewares/AuthMiddleware');

const { signup, login } = require('../Controllers/AuthController');
router.post('/signup', signup);

router.post('/login', login);

router.get('/verify', userVerification, (req, res) => {
    res.status(200).json({ success: true, user: req.user });
});

module.exports = router;
