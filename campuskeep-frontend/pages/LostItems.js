// DisplayListings.js
import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing';
import { Box, Select } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DisplayListings = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Retrieve category from query parameters and update state
    const { category } = router.query;
    setSelectedCategory(category || '');
  }, [router.query]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    router.push(`/LostItems?category=${category}`);
  };

  // Dummy data for the listings
  const listingsData = [
    { id: 1, title: 'iphone 11', description: 'Found by the cupola', image: '/images/dummyitem.webp', category: 'Electronics' },
    { id: 2, title: 'ECU Hoodie', description: 'I found this hoodie in the Isley innovation hub, Id like to get it back to its owner!', image: '/images/dummyitem2.jpg', category: 'Clothing' },
    { id: 3, title: 'airpods', description: 'Found sum airpods', image: '/images/dummyitem3.jpg', category: 'Electronics' },
  ];

  const filteredListings = selectedCategory
    ? listingsData.filter((listing) => listing.category === selectedCategory)
    : listingsData;

  return (
    <>
      <Navbar handleCategoryChange={handleCategoryChange} />
      <div className="flex items-center justify-center h-screen bg-violet-900 text-black-200">
        <Box
          w="700px"
          h="400px"
          bgImage="url('/images/campuskeep-removebg.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></Box>
        <div className="w-1/2 p-8 bg-neutral-200 rounded shadow-md">
          <h1 className="text-4xl font-bold mb-8 text-black-200">Recently found items</h1>

          {/* Dropdown for selecting categories */}
          <Select
            placeholder="All Categories"
            mb="4"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Headphones">Headphones</option>
            <option value="Other">Other</option>
          </Select>

          {/* Display filtered listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((listing) => (
              <Link key={listing.id} legacyBehavior href={`/ClaimItem?id=${listing.id}`} passHref>
                <a>
                  <Listing {...listing} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayListings;
