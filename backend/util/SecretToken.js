require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.createSecretToken = id => {
    if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET missing in environment variables');
        throw new Error('JWT configuration error');
    }

    if (!id) {
        throw new Error('User ID is required to generate token');
    }

    try {
        return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
    } catch (error) {
        console.error('JWT generation failed:', error);
        throw new Error('Failed to generate authentication token');
    }
};
