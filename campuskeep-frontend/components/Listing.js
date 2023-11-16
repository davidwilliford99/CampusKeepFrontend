import React from 'react';

const Listing = ({ title, description, image }) => {
  return (
    <div className="p-4 mb-4 border rounded-md shadow-md bg-yellow-100 transition-transform duration-300 hover:transform hover:scale-105">
      <img src={image} alt={title} className="mb-2 rounded-md" />

      <h2 className="text-xl mb-2 text-grey-300">{title}</h2>

      <p className="text-gray-600">{description}</p>
      
    </div>
  );
};

export default Listing;
