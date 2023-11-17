import React from 'react';
import { Box, Text, VStack, ChakraProvider } from '@chakra-ui/react';
import bgImage from './../public/images/ecu-campus-1.jpg';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Box
      w="full"
      h='calc(88vh)'
      bgImage="url('/images/ecu-campus-2.jpeg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <div className='bg-black w-full bg-opacity-70 p-20 rounded-2xl flex flex-col items-center justify-center'>
        <h1 className='text-7xl font-sans mb-5'>Campus Keep</h1>
        <h3 className='text-xl text-neutral-400 font-sans font-extralight mb-7'>Keeping ECU's lost items safe</h3>
        <div className='flex gap-2'>
          <Link legacyBehavior href="/UploadItem"><a className="py-2 px-6 rounded-lg bg-purple-900 hover:bg-purple-800 text-md transition duration-300 font-semibold">See Lost Items</a></Link>
        </div>
      </div>
    </Box>
    
  );
};

export default HeroSection;
