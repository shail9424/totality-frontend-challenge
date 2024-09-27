// src/api.js

const properties = [
    {
        id: 1,
        title: "Cozy Studio Apartment",
        description: "A lovely studio apartment in the city center.",
        price: 120,
        image: "/images/studio.jpeg",
    },
    {
        id: 2,
        title: "Spacious Two-Bedroom Apartment",
        description: "A spacious apartment perfect for families.",
        price: 200,
        image: "/images/two-bedroom.jpg",
    },
    {
        id: 3,
        title: "Luxury Penthouse",
        description: "A luxurious penthouse with stunning views.",
        price: 350,
        image: "/images/penthouse.jpg",
    },
];

// Mock API function to fetch properties
export const fetchProperties = async () => {
    // Simulate a network delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(properties);
        }, 1000);
    });
};
