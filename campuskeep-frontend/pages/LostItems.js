import React from 'react';
import Listing from '../components/Listing';
import { Box, Input, Button, Link as ChakraLink, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const DisplayListings = () => {
  // Dummy data for the listings
  const listingsData = [
    { title: 'iphone 11', description: 'Found by the cupola', image: '/images/dummyitem.webp' },
    { title: 'ECU Hoodie', description: 'I found this hoodie in the Isley innovation hub, Id like to get it back to its owner!', image: '/images/dummyitem2.jpg' },
    { title: 'airpods', description: 'Found sum airpods', image: '/images/dummyitem3.jpg' },
  ];

  return (
    <>
    <Navbar/>
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
      >
      </Box>
      <div className="w-1/2 p-8 bg-purple-300 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-black-200">Recently found items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listingsData.map((listing, index) => (
            <Listing key={index} {...listing} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default DisplayListings;
