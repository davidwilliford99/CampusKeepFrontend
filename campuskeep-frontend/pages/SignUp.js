"use client"

import { Box, Text, VStack, ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: ''
  });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
        console.log(formData)
        const response = await axios.post('http://127.0.0.1:8000/createUser/', formData);
        setMessage(response.data.message);
    } 
    catch (error) {
        setIsError(true);
        if (error.response && error.response.data) {
            setMessage(error.response.data.message);
        } else {
            setMessage('Error creating user');
        }
    }

    console.log(message);
  };



  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center bg-purple-900 text-white'>
      <img className='w-1/3' src='/images/campuskeep-removebg.png'/>
      <div className="w-96 p-8 my-20 rounded border border-black shadow-2xl">
        <h2 className='text-4xl font-bold mb-6'>Create Account</h2>

        {message && (
          <div 
            style={{ backgroundColor: isError ? 'red' : 'green' }}
            className='text-white my-3'
            >
              {message}
          </div>
        )}

        <form className='border-solid' onSubmit={handleSignUp}>
          <label className='mb-4 block'>
            Email:
            <input 
              required
              name='email'
              value={formData.email} 
              onChange={handleChange}
              className='border bg-purple-900 p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500' 
              type="text"/>
          </label>
          <label className='mb-4 block'>
            Username:
            <input 
              required
              name='username'
              value={formData.username} 
              onChange={handleChange}
              className='border bg-purple-900 p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500' 
              type="text" />
          </label>
          <label className='mb-4 block'>
            First Name:
            <input 
              required
              name='first_name'
              value={formData.first_name} 
              onChange={handleChange}
              className='border bg-purple-900 p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500' 
              type="text" />
          </label>
          <label className='mb-4 block'>
            Last Name:
            <input 
              required
              name='last_name'
              value={formData.last_name} 
              onChange={handleChange}
              className='border bg-purple-900 p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500' 
              type="text" />
          </label>
          <label className='mb-4 block'>
            Password:
            <input 
              required
              name='password'
              value={formData.password} 
              onChange={handleChange}
              className='border bg-purple-900 p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500' 
              type="password" />
          </label>
          <button className='bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-purple-300' type="submit">Sign Up</button>
          <br />
          <Link href="/Login" legacyBehavior>
            <a className="block mt-4 text-gray-300 hover:text-gray-700 transition duration-300">Already have an account? Login here</a>
          </Link>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;