import React from 'react';
import { useParams} from 'react-router-dom';
const PaymentCheckout = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Payment check out</h1>
            <h2>Welocme to  details {serviceId}</h2>
           
        </div>
    );
};

export default PaymentCheckout;