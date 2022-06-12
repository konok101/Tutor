import React from 'react';

const Service = ({service}) => {

    const {id,img, Sub, Cost, time }= service;
    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card " style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Subject:{ Sub}</h5>
                <p>Price: {Cost}</p>
                <p>Time: {time}</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 
                <button> {Sub} for payment</button>
            </div>
        </div>

    </div>
    );
};

export default Service;