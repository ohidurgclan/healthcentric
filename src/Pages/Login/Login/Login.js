import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <>
            <h3>Please Login</h3>
            <button onClick={signInUsingGoogle} className="appointment-btn">Login With Google</button>
        </>
    );
};

export default Login;