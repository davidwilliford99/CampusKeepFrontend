// use client 
//here is davids campus keep link if you want it.
/*<Link legacyBehavior href="/">
                <a className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">Campus Keep</span>
                </a>
              </Link>*/

import React from 'react';
import Link from 'next/link';
import SignUp from '../pages/SignUp';
import { Box, Text, VStack, ChakraProvider } from '@chakra-ui/react';


const Navbar = () => {
  return (
    <nav className="bg-neutral-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
            <Box
        w="200px"
        h="80px"
        bgImage="url('/images/campuskeep-removebg.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
      </Box>
              
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link legacyBehavior href="/"><a className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Home</a></Link>
              <Link legacyBehavior href="/LostItems"><a className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Lost Items</a></Link>
              <Link legacyBehavior href="/categories"><a className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Categories</a></Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link legacyBehavior href="SignUp"><a className="py-2 px-2 font-medium text-gray-500 hover:text-gray-700 transition duration-300">Sign Up / Sign In</a></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



