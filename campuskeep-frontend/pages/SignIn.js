"use client"

import { Box, Text, VStack, ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useRouter } from 'next/router';

const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    password: '',
    email: ''
  });



  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      console.log(formData)
      const response = await axios.post('http://127.0.0.1:8000/users/login/', formData);
      setMessage(response.data.message);

      const jwtToken = response.data.jwt;
      localStorage.setItem('jwtToken', jwtToken);

      const timer = setTimeout(() => {
        router.push('/');
      }, 2000);
        
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
    <div className='flex items-center justify-center min-h-screen bg-purple-900 text-white'>
      <img className='w-1/3' src='/images/campuskeep-removebg.png'/>
      <div className="w-96 p-8 my-20 rounded border border-black shadow-2xl">
        <h2 className='text-4xl font-bold mb-6'>Sign In</h2>

        {message && (
          <div 
            style={{ backgroundColor: isError ? 'red' : 'green' }}
            className='text-white my-3 rounded-lg px-10 py-4'
            >
              {message}
          </div>
        )}

        <form className='border-solid' onSubmit={handleSignIn}>
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
            Password:
            <input 
              required
              name='password'
              value={formData.password} 
              onChange={handleChange}
              className='border bg-purple-900 p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500' 
              type="password" />
          </label>
          <button className='bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-purple-300' type="submit">Sign In</button>
          <br />
          <Link href="/SignUp" legacyBehavior>
            <a className="block mt-4 text-gray-300 hover:text-gray-700 transition duration-300">Create An Account</a>
          </Link>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignIn;