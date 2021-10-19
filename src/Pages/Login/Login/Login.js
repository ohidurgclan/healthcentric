import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
                history.push(redirectUri);
            })
    }
    return (
        <>
            <h3>Please Login</h3>
            <button onClick={handleGoogleLogin} className="appointment-btn">Login With Google</button>
        </>
    );
};

export default Login;