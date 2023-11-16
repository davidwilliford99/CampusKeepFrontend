import React, { useState } from 'react';
import Listing from '../components/Listing';
import { Box, Text, Input, Stack, Button, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const ClaimItem = () => {
  // Dummy data for the listings
  const [claimedItems, setClaimedItems] = useState([]);
  const listingsData = [
    { id: 1, title: 'iPhone 11', description: 'Found by the cupola', image: '/images/dummyitem.webp' },
  ];

  const handleClaim = (itemId) => {
    // Add the claimed item to the claimedItems state
    setClaimedItems([...claimedItems, itemId]);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-violet-900 text-black-200">
        <div className="w-3/4 p-8 bg-white rounded-md shadow-md">
          <h1 className="text-4xl font-bold mb-8 text-violet-900">Claim an item</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listingsData.map((listing) => (
              <div key={listing.id} className="bg-white p-4 rounded-md shadow-md mb-4">
                <Listing {...listing} />
                {claimedItems.includes(listing.id) ? (
                  <Text color="red.500">Item claimed!</Text>
                ) : (
                  <Button
                    colorScheme="yellow"
                    onClick={() => handleClaim(listing.id)}
                    className="mt-2"
                  >
                    Claim Item
                  </Button>
                )}
                
              </div>
            ))}
            <Stack spacing={4} ml={4}>
          <Input placeholder="Answer 1" />
          <Input placeholder="Answer 2" />
          <Input placeholder="Answer 3" />
        </Stack>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ClaimItem;
