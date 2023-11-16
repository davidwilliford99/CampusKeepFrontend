import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Text, Input, Stack, Button, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const ClaimItem = () => {
  const router = useRouter();
  const { id } = router.query;

  // Dummy data for the listings
  const [claimedItems, setClaimedItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const listingsData = [
    { id: 1, title: 'iPhone 11', description: 'Found by the cupola', image: '/images/dummyitem.webp' },
  ];

  useEffect(() => {
    // Find the item based on the ID from the route parameters
    const item = listingsData.find((item) => String(item.id) === String(id));
    setCurrentItem(item);
  }, [id]);

  const handleClaim = () => {
    // Add the claimed item to the claimedItems state
    setClaimedItems([...claimedItems, currentItem.id]);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-violet-900 text-black-200">
        <div className="w-3/4 p-8 bg-white rounded-md shadow-md">
          <h1 className="text-4xl font-bold mb-8 text-violet-900">Claim an item</h1>
          {currentItem ? (
            <div className="flex items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-4 rounded-md shadow-md mb-4">
                <img src={currentItem.image} alt={currentItem.title} className="mb-2 rounded-md" />
                <h2 className="text-xl mb-2 text-grey-300">{currentItem.title}</h2>
                <p className="text-gray-600">{currentItem.description}</p>
                {claimedItems.includes(currentItem.id) && (
                  <Text color="red.500">Item claimed!</Text>
                )}
              </div>
              <Stack spacing={4} ml={4}>
                <Input placeholder="Answer 1" />
                <Input placeholder="Answer 2" />
                <Input placeholder="Answer 3" />
                <Button colorScheme="yellow" onClick={handleClaim} className="mt-2">
                  Claim Item
                </Button>
              </Stack>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ClaimItem;
