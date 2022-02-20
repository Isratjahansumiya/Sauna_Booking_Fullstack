import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';

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
    },[])
    return (
        <div>
            <h2>Your have {bookings.length} Bookings</h2>
            {
                bookings.map((book)=><li key={book._id}>{book.name} , Date of booking: {new Date(book.selectedDate).toDateString('dd/mm/yyyy')}</li>)
            }

        </div>
    );
};

export default About;