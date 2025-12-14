import { useState } from 'react';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
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
                'http://localhost:8080/signup',
                formData,
                { withCredentials: true } // 🔥 REQUIRED FOR COOKIE
            );

            // ✅ ONLY CHECK success
            if (res.data.success) {
                console.log('Signup successful, cookie set');

                // 🔥 REDIRECT TO DASHBOARD
                window.location.href = 'http://localhost:3000';
            } else {
                setError('Signup failed');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-card" onSubmit={handleSubmit}>
                <h2>Create your account</h2>
                <p className="subtitle">Start your investing journey</p>

                {error && <p className="error">{error}</p>}

                <input
                    type="text"
                    name="username"
                    placeholder="Full name"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

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
                    {loading ? 'Creating account...' : 'Sign up'}
                </button>

                <p className="footer-text">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    );
};

export default Signup;
