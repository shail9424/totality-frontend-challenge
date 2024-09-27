import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [bedrooms, setBedrooms] = useState(0);

    const handleApplyFilters = () => {
        const filters = { location, priceRange, bedrooms };
        onFilterChange(filters);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                type="number"
                placeholder="Min Price"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
            />
            <input
                type="number"
                placeholder="Max Price"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
            />
            <input
                type="number"
                placeholder="Bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
            />
            <button onClick={handleApplyFilters}>Apply Filters</button>
        </div>
    );
};

export default Filters;
