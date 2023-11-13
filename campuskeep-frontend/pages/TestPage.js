import { Box, Button, Text } from '@chakra-ui/react';



export default function TestPage() {

  return (

    <Box className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <Text fontSize="4xl" className="mb-4">
        Welcome to the Homepage
      </Text>

      <Text fontSize="md" className="mb-8">
        This is a Next.js homepage using Chakra UI and Tailwind CSS.
      </Text>

      <Button colorScheme="blue" className="mt-4">
        Get Started
      </Button>
      
    </Box>
  );
}
