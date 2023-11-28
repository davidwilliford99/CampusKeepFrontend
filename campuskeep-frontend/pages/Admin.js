import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Admin = () => {
  // Dummy data for claims
  const [claims, setClaims] = useState([
    { id: 1, itemId: 1, answers: ['answer1', 'answer2', 'answer3'], status: 'pending' },
    // Add more claims as needed
  ]);

  // Function to handle accepting a claim
  const handleAcceptClaim = (claimId) => {
    setClaims((prevClaims) =>
      prevClaims.map((claim) =>
        claim.id === claimId ? { ...claim, status: 'accepted' } : claim
      )
    );
  };

  // Function to handle deleting a claim
  const handleDeleteClaim = (claimId) => {
    setClaims((prevClaims) => prevClaims.filter((claim) => claim.id !== claimId));
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-violet-900 text-black-200">
        <div className="w-3/4 p-8 bg-white rounded-md shadow-md">
          <h1 className="text-4xl font-bold mb-8 text-violet-900">Admin Dashboard</h1>
          {claims.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {claims.map((claim) => (
                <Box key={claim.id} bg="white" p={4} rounded="md" shadow="md" mb={4}>
                  <Text fontSize="xl" mb={2}>
                    Claim ID: {claim.id}
                  </Text>
                  <Text mb={2}>
                    Item ID: {claim.itemId}
                  </Text>
                  <Text mb={2}>
                    Answers: {claim.answers.join(', ')}
                  </Text>
                  <Text mb={2}>
                    Status: {claim.status}
                  </Text>
                  {claim.status === 'pending' && (
                    <>
                      <Button colorScheme="green" onClick={() => handleAcceptClaim(claim.id)} mr={2}>
                        Accept
                      </Button>
                      <Button colorScheme="red" onClick={() => handleDeleteClaim(claim.id)}>
                        Delete
                      </Button>
                    </>
                  )}
                </Box>
              ))}
            </div>
          ) : (
            <p>No claims to display.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
