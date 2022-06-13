import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom'

const Service = ({ service }) => {

    const { id, img, Sub, Cost, time, Description } = service;

    const navigate = useNavigate();
    const navigateToPayment = Sub => {
        navigate(`/home/${id}`)
       
    }
    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4 '>
            <div className="card shadow bg-white rounded" style={{ width: "18rem" }}>
                <img width='300px' height='270px' src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title "> {Sub}</h5>
                    <div className='timeZone'>
                    <p> <b>Price: </b>{Cost}Taka</p>
                    <p> <b>Time:</b> {time} </p>
                    </div>
                    <p className="card-text"> {Description}</p>

                    <div className='payment-btn'>
                        <button  onClick={() => navigateToPayment(id)}> <span>{Sub} for payment</span> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;