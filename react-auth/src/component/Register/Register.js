import * as React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Register() {
    return (
        <div>
            <Container className='full-width'>
                <Row>
                    <Col>
                        <h2>Please Register</h2>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="By clicking Sign up, you agree to our Terms and data policy."/>
                        </Form.Group>
                        <Button size="lg"variant="danger" type="submit">
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