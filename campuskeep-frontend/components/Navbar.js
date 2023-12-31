"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Navbar = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [hasJwt, setHasJwt] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    router.push(`/LostItems?category=${category}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwtToken');
    if (jwt) {
      setHasJwt(true);
      setIsAdmin(true);
    }
  }, []);

  return (
    <nav className="bg-white shadow-lg" style={{height: "12vh"}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className='mb-2'>
              <Box
                w="200px"
                h="80px"
                pb="10px"
                bgImage="url('/images/ecu-logo.png')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="30%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              ></Box>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link legacyBehavior href="/">
                <a className="py-4 px-4 text-gray-500 hover:text-gray-700 transition duration-300">Home</a>
              </Link>
              {/* Updated Categories link with dropdown menu */}
              <Menu>
                <MenuButton as="a" className="py-4 px-4 text-gray-500 hover:text-gray-700 transition duration-300">
                  Categories
                </MenuButton>
                <MenuList className='bg-white text-black'>
                  <MenuItem>
                    <Link legacyBehavior href="/LostItems?category=Electronics">
                      <a>Electronics</a>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link legacyBehavior href="/LostItems?category=Clothing">
                      <a>Clothing</a>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link legacyBehavior href="/LostItems?category=Headphones">
                      <a>Headphones</a>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* End of updated Categories link */}
              <Link legacyBehavior href="/LostItems">
                <a className="py-4 px-4 text-gray-500 hover:text-gray-700 transition duration-300">Lost Items</a>
              </Link>
              <Link legacyBehavior href="/UploadItem">
                <a className="py-4 px-4 text-gray-500 hover:text-gray-700 transition duration-300">Upload Item</a>
              </Link>
              {
                hasJwt && (
                  <Link legacyBehavior href="/Admin">
                    <a className="py-4 px-4 text-gray-500 hover:text-gray-700 transition duration-300">Admin Page</a>
                  </Link>
                )
              }

            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link legacyBehavior href="/MessagesView">
              <a className="py-2 px-5 rounded-lg bg-yellow-600 font-medium text-white hover:bg-yellow-700 transition duration-300">Messaging</a>
            </Link>

            {!hasJwt && (
              <Link legacyBehavior href="/SignUp">
                <a className="py-2 px-5 rounded-lg bg-purple-800 font-medium text-white hover:bg-purple-900 transition duration-300">Sign Up / Sign In</a>
              </Link>
            )}
            {hasJwt && (
              <Link legacyBehavior href="/" passHref>
                <a onClick={handleLogout} className="py-2 px-5 rounded-lg bg-purple-800 font-medium text-white hover:bg-purple-900 transition duration-300">Logout</a>
              </Link>
            )}



          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
