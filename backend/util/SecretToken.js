require('dotenv').config();
const jwt = require('jsonwebtoken');

// =======================
// 🟢 CREATE JWT TOKEN
// =======================
module.exports.createSecretToken = (id) => {

    // 🔴 CHANGED: Explicit validation with clear error
    if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET missing in environment variables'); // 🟢 ADDED
        throw new Error('JWT configuration error');
    }

    // 🔴 CHANGED: Validate payload
    if (!id) {
        throw new Error('User ID is required to generate token'); // 🟢 ADDED
    }

    try {
        // 🟢 TOKEN GENERATION
        return jwt.sign(
            { id },                       // 🟢 PAYLOAD
            process.env.JWT_SECRET,       // 🟢 SECRET
            { expiresIn: '3d' }            // 🟢 EXPIRY
        );
    } catch (error) {
        console.error('JWT generation failed:', error); // 🟢 ADDED
        throw new Error('Failed to generate authentication token');
    }
};
