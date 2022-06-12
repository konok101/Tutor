import React from 'react';
import {useNavigate} from 'react-router-dom'

const Service = ({service}) => {

    const {id, img, Sub, Cost, time }= service;

    const navigate= useNavigate();
    const navigateToPayment = Sub =>{
        navigate(`/home/${Sub}`)
    }
    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card " style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Subject:{ Sub}</h5>
                <p>Price: {Cost}</p>
                <p>Time: {time}</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 
                <button onClick={()=>navigateToPayment(Sub)}> {Sub} for payment</button>
            </div>
        </div>

    </div>
    );
};

export default Service;