import React from "react";
import { login } from "../api/api";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

function Login() {
    return (
        <main>
            <LoginForm handleLogin={login} />
            <Link to={'/register'}>
                Register
            </Link>
        </main>
    );
}

export default Login;
