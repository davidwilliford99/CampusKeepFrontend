import React from 'react';
import { Box, Text, VStack, ChakraProvider } from '@chakra-ui/react';
import bgImage from './../public/images/ecu-campus-1.jpg';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Box
      w="full"
      h='calc(88vh)'
      bgImage="url('/images/student-center.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <div className=' bg-opacity-40 w-full p-10 flex flex-col items-center justify-center'>
        <h1 className='text-7xl font-sans font-bold mb-5'>Campus Keep</h1>
        <h3 className='text-2xl text-yellow-100 font-bold font-sans mb-7'>Keeping ECU's lost items safe</h3>
        <div className='flex gap-2 mt-2'>
          <Link legacyBehavior href="/UploadItem"><a className="py-4 px-12 rounded-lg bg-purple-900 hover:bg-purple-800 text-md transition duration-300 font-semibold">See Lost Items</a></Link>
        </div>
      </div>
    </Box>
    
  );
};

export default HeroSection;
