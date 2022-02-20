import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


function Login() {
    const {signInUsingGoogle,signInUsingGithub}=useAuth();

    return (
        <div>
            <h1>Ready To Sweat?</h1>
            <br />
            <Button variant="secondary" onClick={signInUsingGoogle}>Google sign In</Button>
            <button onClick={signInUsingGithub}>Github sign In</button>
            <br/>
            <br />
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button size="lg"variant="danger" type="submit">
                Log In
            </Button>
        </Form>
        <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;