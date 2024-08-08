import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogin(formData);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={onSubmit} className="login-form">
                <div>
                    <label htmlFor="username">USERNAME</label>
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
                    <label htmlFor="password">PASSWORD</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {errorMessage && <p className='error-msg'>{errorMessage}</p>}
                <button type="submit">Login</button>
                <p className='sign-link'>
                    Don't have an account? <Link  to={'/register'}>
                Sign Up
                </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
