import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import RegistrationForm from './components/RegistrationForm'; // Import RegistrationForm


const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegistrationForm />} /> {/* Route for Registration */}
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Cart />
                <Footer />
            </Router>
        </CartProvider>
    );
};

export default App;
