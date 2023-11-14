import React from 'react';
import { Box, Text, VStack, ChakraProvider } from '@chakra-ui/react';
import bgImage from './../public/images/ecu-campus-1.jpg';

const HeroSection = () => {
  return (
    <Box
      w="full"
      h= "400px"
      bgImage="url('/images/ecu-campus-2.jpeg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack textAlign="center" color="white" p={4}>
        <Text fontSize='5xl' fontWeight="bold">Campus Keep</Text>
        <Text fontSize='lg' fontWeight="light">Keeping your lost items safe</Text>
      </VStack>
    </Box>
  );
};

export default HeroSection;