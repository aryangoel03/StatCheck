import React from "react";
import { login } from "../api/api";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = async (loginDetails) => {
        try {
            const userData = await login(loginDetails);
            navigate('/');
            return userData;
        } catch (error) {
            console.error("Login failed: ", error.message);
            throw error;
        }
    }
    return (
        <main>
            <LoginForm handleLogin={handleLogin} />
        </main>
    );
}

export default Login;
