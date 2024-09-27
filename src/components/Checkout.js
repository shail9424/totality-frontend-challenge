import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cart } = useContext(CartContext);
    const totalCost = cart.reduce((total, item) => total + item.price, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your checkout logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <h3>Total: ₹{totalCost}</h3>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Payment Details" required />
            <button type="submit">Complete Booking</button>
        </form>
    );
};

export default Checkout;
