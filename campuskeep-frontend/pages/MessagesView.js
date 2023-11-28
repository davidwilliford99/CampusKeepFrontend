//this is the view all messages page
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Message from '../components/MessageBox';

const MessagesView = () => {
  // Dummy data for messages
  const messages = [
    {
      sender: 'John Doe',
      timestamp: '2023-11-16 14:30',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      sender: 'Jane Smith',
      timestamp: '2023-11-16 15:45',
      body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more messages as needed
  ];

  return (
    <Box p={8} bg="white" rounded="md" shadow="md" maxW="600px" mx="auto">
      <Heading mb={4} fontSize="2xl" color="teal.500">
        Messages
      </Heading>
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </Box>
  );
};

export default MessagesView;
