import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';
import { Card, Container } from 'react-bootstrap';

function About() {
    const [bookings,setBookings]=useState([])
    const {user}=useAuth();
    useEffect(()=>{
        fetch('http://localhost:5000/booking?email='+user.email,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        })
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[user.email])
    return (
        <Container>
        <div className='full-width'>
            <h4>Your have {bookings.length} Bookings</h4>
            {
                bookings.map((book)=><Card body
                key={book._id}>
                <p>Name: {book.name}</p>
                <p>Date of booking: {new Date(book.selectedDate).toDateString('dd/mm/yyyy')}, Booking Time: {book.reservedTime}</p>
                </Card>)
            }

        </div>
        </Container>
    );
};

export default About;