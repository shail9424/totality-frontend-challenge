import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    
    return (
        <div>
            <h2>Your Cart</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <h3>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h3>
        </div>
    );
};

export default Cart;
