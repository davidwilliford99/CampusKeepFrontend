import Navbar from '../components/Navbar';
import { Box, Text, VStack, ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import Link from 'next/link';

const Messaging = () => {
    return (
      <div>
        <Head>
          <title>Messaging</title>
        </Head>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Messaging App</h1>
          <div className="flex">
            <div className="w-1/4 p-4 border-r">
              <h2 className="text-xl font-bold mb-2">Conversations</h2>
              <ul>
                <li className="cursor-pointer hover:bg-gray-100 p-2">User 1</li>
                <li className="cursor-pointer hover:bg-gray-100 p-2">User 2</li>
              </ul>
            </div>
            <div className="w-3/4 p-4">
              <h2 className="text-xl font-bold mb-2">Selected Conversation</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Messaging;