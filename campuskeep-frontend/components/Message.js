// components/Message.js
import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Message = ({ message, isCurrentUser, onClick }) => {
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
          <img src={user.avatarUrl} alt={user.name} />
        </Box>
        <Text fontWeight="bold">{user.name}</Text>
      </Flex>
      <Text color="gray.600" mb="2">
        {timestamp}
      </Text>
      <Text>{body}</Text>
    </Box>
  );
};

export default Message;
