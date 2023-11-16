"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Navbar = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    router.push(`/LostItems?category=${category}`);
  };

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
              ></Box>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link legacyBehavior href="/">
                <a className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Home</a>
              </Link>
              {/* Updated Categories link with dropdown menu */}
              <Menu>
                <MenuButton as="a" className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">
                  Categories
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleCategoryChange('Electronics')}>Electronics</MenuItem>
                  <MenuItem onClick={() => handleCategoryChange('Clothing')}>Clothing</MenuItem>
                  <MenuItem onClick={() => handleCategoryChange('Headphones')}>Headphones</MenuItem>
                </MenuList>
              </Menu>
              {/* End of updated Categories link */}
              <Link legacyBehavior href="/LostItems">
                <a className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Lost Items</a>
              </Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link legacyBehavior href="SignUp">
              <a className="py-2 px-2 font-medium text-gray-500 hover:text-gray-700 transition duration-300">Sign Up / Sign In</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
