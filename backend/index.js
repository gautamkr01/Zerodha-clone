require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoute = require('./Routes/AuthRoute');

// 🟢 ADDED: auth middleware
const { userVerification } = require('./Middlewares/AuthMiddleware');

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const app = express();

// =======================
// 🟢 MIDDLEWARES
// =======================

// 🔴 CHANGED: Proper CORS config (VERY IMPORTANT)
app.use(
    cors({
        origin: ['http://localhost:3000', 'http://localhost:3001'], // 🟢 ADDED
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json()); // 🔴 bodyParser not needed anymore

// =======================
// 🟢 AUTH ROUTES
// =======================
app.use('/', authRoute);

// =======================
// 🟢 DATABASE CONNECTION
// =======================
mongoose
    .connect(url)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // 🔴 CHANGED: fail fast
    });

// =======================
// 🟢 PROTECTED API ROUTES
// =======================

// 🔴 CHANGED: Protect holdings
app.get('/allHoldings', userVerification, async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find({});
        res.status(200).json(allHoldings);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch holdings'
        });
    }
});

// 🔴 CHANGED: Protect positions
app.get('/allPositions', userVerification, async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.status(200).json(allPositions);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch positions'
        });
    }
});

// 🔴 CHANGED: Protect orders
app.get('/allOrders', userVerification, async (req, res) => {
    try {
        const allOrders = await OrdersModel.find({});
        res.status(200).json(allOrders);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch orders'
        });
    }
});

// 🔴 CHANGED: Protect new order creation
app.post('/newOrder', userVerification, async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;

        if (!name || !qty || !price || !mode) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const newOrder = new OrdersModel({
            name,
            qty,
            price,
            mode
        });

        await newOrder.save();

        res.status(201).json({
            success: true,
            message: 'Order saved successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to save order'
        });
    }
});

app.post('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'lax'
    });

    res.status(200).json({
        success: true,
        message: 'Logged out successfully'
    });
});

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);

    res.status(500).json({
        success: false,
        message: 'Something went wrong on the server'
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
