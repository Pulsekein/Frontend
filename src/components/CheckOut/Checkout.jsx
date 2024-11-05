import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
    const navigate = useNavigate();

    const handlePayment = (success) => {
        axios.post('http://localhost:5000/api/checkout', { success })
            .then(response => {
                alert(response.data.message);
                navigate('/payment-status');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <h1>Checkout</h1>
            <button className="btn btn-success" onClick={() => handlePayment(true)}>Simulate Payment Success</button>
            <button className="btn btn-danger" onClick={() => handlePayment(false)}>Simulate Payment Failure</button>
        </div>
    );
}

export default Checkout;
