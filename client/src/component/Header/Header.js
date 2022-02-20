import * as React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function Header() {
    const {user,logout}=useAuth();
    return (
    <div className='header'>
        <Navbar bg="light" variant="light">
         <Container>
            <Navbar.Brand href="/home" id='logo'>Finnish Sauna</Navbar.Brand>
            <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {user.email?<Navbar.Text>{user.displayName}</Navbar.Text>:
            <Nav.Link as={Link} to="/login"><Button size="lg" variant="outline-danger">Login</Button></Nav.Link>}
            {user?.email && <Button size="lg" variant="outline-danger" onClick={logout}>Log out</Button>}
            </Nav>
         </Container>
       </Navbar>
    </div>

    );
};

export default Header;