// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Property Rentals. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
