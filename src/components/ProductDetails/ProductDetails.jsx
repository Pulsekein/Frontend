import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css";
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`https://backend-zbj9.onrender.com/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error));
    }, [id]);

    const addToCart = () => {
        axios.post('https://backend-zbj9.onrender.com/api/cart', { productId: product.id })
            .then(response => navigate('/checkout'))
            .catch(error => console.error(error));
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className="container1">
            <h1>{product.name}</h1>
            <img src={product.imageUrl} className="card-img-top" alt={product.name} />
            <p>Price: ${product.price}</p>
            <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductDetail;
