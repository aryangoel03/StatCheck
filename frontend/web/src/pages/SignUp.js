import React from "react";
import { register } from "../api/api";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <main>
            <RegisterForm handleSubmit={register} />
            <Link to={'/login'}>
                Login......
            </Link>
        </main>
    );
}

export default SignUp;
