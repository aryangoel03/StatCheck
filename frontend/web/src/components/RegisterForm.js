import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = ({ handleSubmit }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await handleSubmit(formData);
        } catch (error) {
            console.error("Form submission error:", error);
            setError(error.message);
        }
    };

    return (
        <div className='login-container'>
        <form className='login-form' onSubmit={onSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            {error && <p className='error-msg'>{error}</p>}
            <button type="submit">Register</button>
            <p className='sign-link'>Already have an account? <Link to={'/login'}>
                Login
            </Link></p>
        </form>
        </div>
    );
};

export default RegisterForm;
