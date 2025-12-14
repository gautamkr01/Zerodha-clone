const jwt = require('jsonwebtoken');

const userVerification = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: No token'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        return next();
    } catch (error) {
        console.error('Auth verification error:', error);

        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }
};

module.exports = { userVerification };
