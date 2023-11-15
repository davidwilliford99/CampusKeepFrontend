// Listing.js
import React from 'react';

const Listing = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Add more details or styles as needed */}
    </div>
  );
};

export default Listing;