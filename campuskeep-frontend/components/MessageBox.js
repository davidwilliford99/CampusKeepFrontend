// components/MessageBox.js
import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const MessageBox = ({ message, isCurrentUser, onClick }) => {
  // Check if message is defined
  if (!message) {
    return null; // or handle it in another way
  }

  // Destructure message properties
  const { user, timestamp, body } = message;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      mb="4"
      boxShadow="md"
      bg={isCurrentUser ? 'blue.100' : 'white'}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <Flex alignItems="center" mb="2">
        <Box w="10" h="10" rounded="full" overflow="hidden" mr="3">
          {/* Check if user is defined before accessing its properties */}
          {user && <img src={user.avatarUrl} alt={user.name} />}
        </Box>
        <Text fontWeight="bold">{user?.name}</Text>
      </Flex>
      <Text color="gray.600" mb="2">
        {timestamp}
      </Text>
      <Text>{body}</Text>
    </Box>
  );
};

export default MessageBox;
