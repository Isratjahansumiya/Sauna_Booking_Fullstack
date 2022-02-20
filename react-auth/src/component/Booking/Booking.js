import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';
import { useState } from 'react';
import About from './../About/About';


function Booking() {
    const {user}=useAuth();
    const [selectedDate,setSelectedDate]=useState({saunaDate:new Date()});
    const handleBooking=()=>{
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const name = user.displayName;
            const email = user.email;
            const emailVerified = user.emailVerified;
            const newBooking={name,email,emailVerified,selectedDate};
            console.log(newBooking);
            fetch('http://localhost:5000/addBooking',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBooking)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        }

    }

    return (
        <div>
            <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control
                            type="date"
                            name="dob"
                            format= "yyyy-MM-dd"
                            placeholder="Date of Birth"
                            defaultValue={selectedDate.saunaDate}
                            onChange={(e)=>setSelectedDate(e.target.value)} />
                        </Form.Group>
                    </div>
                </div>
                <br />
                <Button onClick={handleBooking}variant="primary" type="submit"> Book</Button>
                <br />
                <About></About>
        </div>
    );
};

export default Booking;