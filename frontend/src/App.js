import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./components/Home/HomePage";
import ProductList from "./components/ProductsList/Product";
import ProductDetail from "./components/ProductDetails/ProductDetails";
import Checkout from "./components/CheckOut/Checkout";
import PaymentStatus from "./components/Payment/Payment";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment-status" element={<PaymentStatus />} />
            </Routes>
        </Router>
    );
}

export default App;
