import { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await axios.post(
                'https://gautamzerodhabackend.onrender.com/login',
                formData,
                { withCredentials: true }
            );

            if (res.data.success) {
                console.log('Login successful, cookie set');
                window.location.href = 'https://gautamzerodhadashboard.onrender.com';
            } else {
                setError('Login failed');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Server error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <form className="login-card" onSubmit={handleSubmit}>
                <h2>Welcome back</h2>
                <p className="subtitle">Login to your account</p>

                {error && <p className="error">{error}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                <p className="footer-text">
                    Don’t have an account? <a href="/signup">Sign up</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
