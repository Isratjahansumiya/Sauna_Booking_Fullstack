import * as React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { signInWithEmailAndPassword,getAuth } from 'firebase/auth';


function Login() {
    const {signInUsingGoogle}=useAuth();
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");
    const auth=getAuth();
    const loginUsingEmail=async (e)=>{
        try {
           const loggedUser= await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
           console.log(loggedUser);

        } catch (error) {
            console.log(error.message);
        }
        e.preventDefault();

    }
    return (
        <Container className='full-width'>
            <h1>Ready To Sweat?</h1>
            <br />
            <Button variant="secondary" onClick={signInUsingGoogle}>Google Log In</Button>
            <br/>
            <br />
            <h6>Or, Log In with Email</h6>
            <br />
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event)=>{
                    setLoginEmail(event.target.value);
                }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Password"
                autoComplete='on'
                onChange={(event)=>{
                    setLoginPassword(event.target.value);
                }}
                 />
            </Form.Group>
            <Button size="lg"variant="danger" type="submit" onClick={loginUsingEmail}>
                Log In
            </Button>
        </Form>
        <br />
        <Link to="/register">New User?</Link>
        </Container>
    );
};

export default Login;