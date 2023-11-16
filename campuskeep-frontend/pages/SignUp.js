"use client"

import { Box, Text, VStack, ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // todo
  };

  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center h-screen bg-violet-900 text-yellow-200'>
      <Box
        w="700px"
        h="400px"
        bgImage="url('/images/campuskeep-removebg.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
      </Box>

      <div className="w-96 p-8 bg-white rounded shadow-md">
        <h2 className='text-4xl text-purple-500 font-bold mb-6'>Sign Up</h2>
        <form className='text-gray-800' onSubmit={handleSignUp}>
          <label className='mb-4 block'>
            Email:
            <input className='border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className='mb-4 block'>
            Password:
            <input className='border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button className='bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300' type="submit">Sign Up</button>
          <br />
          <Link href="/Login" legacyBehavior>
            <a className="block mt-4 text-gray-500 hover:text-gray-700 transition duration-300">Already have an account? Login here</a>
          </Link>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;