import React from 'react';
import PropTypes from 'prop-types';

const PropertyItem = ({ property, addToCart }) => {
    const { title, description, price, image } = property;

    return (
        <div className="property-item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <button onClick={() => addToCart(property)}>Book Now</button>
        </div>
    );
};

PropertyItem.propTypes = {
    property: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default PropertyItem;
