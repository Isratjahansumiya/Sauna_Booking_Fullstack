import React from 'react';
import './Vehicle.css'

const Vehicles = ({vehicle}) => {
    return (
        <div className="card">
            <img src={vehicle.imgUr} alt=""/>
            <h3>{vehicle.title}</h3>
        </div>
    );
};

export default Vehicles;