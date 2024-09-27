// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="app-header">
            <h1>Property Rentals</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
