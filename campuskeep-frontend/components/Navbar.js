// Navbar.js
import React from 'react';
import { Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Navbar = ({ handleCategoryChange }) => {
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
              <a href="/" className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Home</a>
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
              <a href="/LostItems" className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Lost Items</a>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <a href="SignUp" className="py-2 px-2 font-medium text-gray-500 hover:text-gray-700 transition duration-300">Sign Up / Sign In</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
