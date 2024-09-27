import React, { useState, useEffect } from 'react';
import PropertyList from '../components/PropertyList';
import { fetchProperties } from '../api';

const Home = ({ onBook }) => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const loadProperties = async () => {
            const props = await fetchProperties();
            setProperties(props);
        };
        loadProperties();
    }, []);

    return (
        <div>
            <h1>Available Properties</h1>
            <PropertyList properties={properties} onBook={onBook} />
        </div>
    );
};

export default Home;
