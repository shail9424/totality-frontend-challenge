import React from 'react';

const PropertyCard = ({ property, onBook }) => {
    return (
        <div className="property-card">
            <img src={property.image} alt={property.title} />
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>${property.price}</p>
            <button onClick={() => onBook(property)}>Book Now</button>
        </div>
    );
};

export default PropertyCard;
