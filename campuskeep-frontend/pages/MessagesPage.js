//this is to view and interact with one person
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import OneOnOneMessaging from '../components/OneOnOneMessaging';

const MessagesPage = () => {
  // Dummy data for messages
  const messages = [
    { id: 1, senderId: 1, timestamp: '2023-11-16 14:30', body: 'Lorem ipsum...' },
    { id: 2, senderId: 2, timestamp: '2023-11-16 15:45', body: 'Sed do eiusmod...' },
    // Add more messages as needed
  ];

  // Dummy data for the current user
  const currentUser = { id: 1, name: 'John Doe', avatarUrl: '/avatars/john.jpg' };

  return (
    <Box p={8} bg="white" rounded="md" shadow="md" maxW="600px" mx="auto">
      <Heading mb={4} fontSize="2xl" color="teal.500">
        One-on-One Messaging
      </Heading>
      <OneOnOneMessaging messages={messages} currentUser={currentUser} />
    </Box>
  );
};

export default MessagesPage;

