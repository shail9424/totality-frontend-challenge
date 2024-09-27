import React, { useState } from 'react';

const RegistrationForm = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call registration API and handle success
        console.log("User registered:", user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="Name" required />
            <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" required />
            <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
