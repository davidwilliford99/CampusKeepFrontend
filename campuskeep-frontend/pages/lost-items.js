// DisplayListings.js
import React from 'react';
import Listing from '../components/Listings';

const DisplayListings = () => {
  // Dummy data for the listings
  const listingsData = [
    { title: 'Listing 1', description: 'Description for Listing 1' },
    { title: 'Listing 2', description: 'Description for Listing 2' },
    { title: 'Listing 3', description: 'Description for Listing 3' },
  ];

  return (
    <div>
      <h1>Page with Listings</h1>
      <div>
        {listingsData.map((listing, index) => (
          <Listing key={index} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default DisplayListings;