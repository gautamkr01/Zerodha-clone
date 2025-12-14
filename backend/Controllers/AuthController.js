const { UsersModel } = require('../model/UsersModel');
const { createSecretToken } = require('../util/SecretToken');
const bcrypt = require('bcryptjs');

// =======================
// 🟢 SIGNUP CONTROLLER
// =======================
module.exports.signup = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        // 🟢 VALIDATION
        if (!email || !password || !username) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // 🟢 CHECK EXISTING USER
        const existingUser = await UsersModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'User already exists'
            });
        }

        // 🟢 CREATE USER
        const user = await UsersModel.create({
            email,
            password,
            username
        });

        // 🟢 GENERATE TOKEN
        const token = createSecretToken(user._id);

        // 🔥 SET COOKIE (THIS IS THE AUTH NOW)
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'none', // ✅ works across ports
            secure: false // ✅ set true only in HTTPS
        });

        // 🔴 CHANGED: DO NOT SEND TOKEN IN RESPONSE
        return res.status(201).json({
            success: true,
            message: 'User signed up successfully',
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        console.error('Signup error:', error);

        return res.status(500).json({
            success: false,
            message: 'Internal server error during signup'
        });
    }
};

// =======================
// 🟢 LOGIN CONTROLLER
// =======================
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 🟢 VALIDATION
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // 🟢 FIND USER
        const user = await UsersModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect password or email'
            });
        }

        // 🟢 COMPARE PASSWORD
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect password or email'
            });
        }

        // 🟢 GENERATE TOKEN
        const token = createSecretToken(user._id);

        // 🔥 SET COOKIE (AUTH SOURCE)
        // res.cookie('token', token, {
        //     httpOnly: true,
        //     sameSite: 'lax',
        //     secure: false
        // });
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'none',
            secure: true // REQUIRED for HTTPS
        });

        // 🔴 CHANGED: NO TOKEN IN JSON
        return res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        console.error('Login error:', error);

        return res.status(500).json({
            success: false,
            message: 'Internal server error during login'
        });
    }
};
