"use client"
import React, { useState } from 'react';
import SignUp from './SignUp';
import Link from 'next/link';
import { Box, Input, Button, Link as ChakraLink, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen bg-violet-900 text-black-200">
    <Box
      w="700px"
      h= "400px"
      bgImage="url('/images/campuskeep-removebg.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    ></Box>
      {loggedIn ? (
        <div>
          <h1 className="text-4xl font-bold">Welcome, {username}!</h1>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div className="w-96 p-8 bg-white rounded shadow-md">
          <h1 className="text-4xl text-purple-500 font-bold mb-6">Login</h1>
          <label className="mb-4 block">
            Username:
            <input
              className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label className="mb-4 block">
            Password:
            <input 
              className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300"
            onClick={handleLogin}
          >
            Login
          </button>
          <br />
          <Link href="/SignUp" legacyBehavior>
            <a className="py-2 px-2 font-medium text-gray-500 hover:text-gray-700 transition duration-300">
              Don't have an account? Click here
            </a>
          </Link>
        </div>
      )}
    </div>
    </>
  );
}

export default Login;
