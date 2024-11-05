import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
    return (
        <div className="homepage-container">
            <h1>Welcome to eCommerce</h1>
            <Link className="btn btn-primary mt-3" to="/products">Shop Now</Link>
        </div>
    );
}

export default Homepage;
