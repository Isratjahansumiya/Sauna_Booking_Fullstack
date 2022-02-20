import * as React from 'react';
import './Home.css'
import { Col, Container, Image, Row } from 'react-bootstrap';
import vectorImg from '../images/bg.jpg'
import Login from './../Login/Login';

function Home() {
    return (
    <div>
        <Container>
            <Row className='full-width'>
                <Col sm={4}><Login/></Col>
                <Col sm={8} className='vectorImage'><Image fluid src={vectorImg} alt="sauna"/></Col>
            </Row>
        </Container>
    </div>
    );
};

export default Home;