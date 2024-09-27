import React from 'react';
import PropertyCard from './PropertyCard';


const PropertyList = ({ properties, onBook }) => {
    if (!properties || properties.length === 0) {
        return <p>No properties available.</p>;
    }

    return (
        <div className="property-list">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} onBook={onBook} />
            ))}
        </div>
    );
};

export default PropertyList;
