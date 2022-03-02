import * as React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { createUserWithEmailAndPassword,getAuth} from 'firebase/auth';


function Register() {
    const [registerName,setRegisterName]=useState("");
    const [registerEmail,setRegisterEmail]=useState("");
    const [registerPassword,setResgisterPassword]=useState("");
    const auth=getAuth();
    const register=async ()=>{
        try {
           const newUser= await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
           console.log(auth)

        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <div>
            <Container className='full-width'>
                <Row>
                    <Col>
                        <h2>Please Register</h2>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                             type="text"
                             placeholder="Enter Name"
                             onChange={(event)=>{
                                 setRegisterName(event.target.value);
                            }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(event)=>{
                                setRegisterEmail(event.target.value);
                            }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                             type="password"
                             placeholder="Password"
                             autoComplete="on"
                             onChange={(event)=>{
                                setResgisterPassword(event.target.value);
                            }}
                             />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" required label="By clicking Sign up, you agree to our Terms and data policy."/>
                        </Form.Group>
                        <Button size="lg"variant="danger" type="submit" onClick={register}>
                            Sign Up
                        </Button>
                    </Form>
                        <br />
                        <Link to="/login">Already Registered?</Link>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;