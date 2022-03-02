import * as React from 'react';
import { Button, Form, Container, Table, Row, Col } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';
import { useState } from 'react';
import About from './../About/About';


function Booking() {
    const {user}=useAuth();
    const [selectedDate,setSelectedDate]=useState({saunaDate:new Date()});
    const [reservedTime,setReservedTime]=useState({});
    const handleBooking=()=>{
        if (user !== null) {
            const name = user.displayName;
            const email = user.email;
            const newBooking={name,email,selectedDate,reservedTime};
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
        <Container>
            <div className="row full-width" >
            <Row>
                <Col>

                    <div className="col-md-4">
                        <Form.Group>
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control
                            type="date"
                            format= "yyyy-MM-dd"
                            defaultValue={selectedDate.saunaDate}
                            onChange={(e)=>setSelectedDate(e.target.value)} />
                        </Form.Group>
                    </div>
                    <br />
                    <p>Select Time</p>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Time</th>
                        <th>Reservation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>16</td>
                        <td><Button variant="outline-dark" onClick={()=>{setReservedTime(16)}}>{reservedTime===16?"Reserved":"Vacant"}</Button></td>
                        </tr>
                        <tr>
                        <td>17</td>
                        <td><Button variant="outline-dark" onClick={()=>{setReservedTime(17)}}>{reservedTime===17?"Reserved":"Vacant"}</Button></td>
                        </tr>
                        <tr>
                        <td>18</td>
                        <td><Button variant="outline-dark" onClick={()=>{setReservedTime(18)}}>{reservedTime===18?"Reserved":"Vacant"}</Button></td>
                        </tr>
                        <tr>
                        <td>19</td>
                        <td><Button variant="outline-dark" onClick={()=>{setReservedTime(19)}}>{reservedTime===19?"Reserved":"Vacant"}</Button></td>
                        </tr>
                        <tr>
                        <td>20</td>
                        <td><Button variant="outline-dark" onClick={()=>{setReservedTime(20)}}>{reservedTime===20?"Reserved":"Vacant"}</Button></td>
                        </tr>
                        <tr>
                        <td>21</td>
                        <td><Button variant="outline-dark" onClick={()=>{setReservedTime(21)}}>{reservedTime===21?"Reserved":"Vacant"}</Button></td>
                        </tr>
                    </tbody>
                </Table>
                <br />
                <Button size="lg" onClick={handleBooking} variant="danger" type="submit"> Book</Button>
                <br />
                </Col>
                <Col>
                <About></About>
                </Col>
            </Row>
            </div>
        </Container>
    );
};

export default Booking;