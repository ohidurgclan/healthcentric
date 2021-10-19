import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

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
            <Container className="mt-5 mb-5 d-flex">
                <Row className="justify-content-center">
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className="appointment-btn" type="submit">
                            Submit
                        </Button>
                    </div>
                    <br />
                    <h4 text-center>--------------------------OR----------------------</h4>
                    <br />
                        <button onClick={handleGoogleLogin} className="appointment-btn">Login With Google</button>
                </Row>
            </Container>
            
        </>
    );
};

export default Login;