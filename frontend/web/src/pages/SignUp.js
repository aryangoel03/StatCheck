import React from "react";
import { register } from "../api/api";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const handleRegister = async (userInfo) => {
        try {
            await register(userInfo);
            navigate('/login');
        } catch (error) {
            console.error("Registration failed: ", error.message);
            throw error;
        }
    }
    return (
        <main>
            <RegisterForm handleSubmit={handleRegister} />
        </main>
    );
}

export default SignUp;
