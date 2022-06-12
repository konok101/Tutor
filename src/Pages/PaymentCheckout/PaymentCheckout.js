import React from 'react';
import {Link, useParams} from 'react-router-dom';
const PaymentCheckout = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Payment check out</h1>
            <h2>Welocme to  details {serviceId}</h2>
            <Link to='/checkout'> <button>Proced Checkout</button> </Link>
        </div>
    );
};

export default PaymentCheckout;