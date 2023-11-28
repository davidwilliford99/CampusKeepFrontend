import React, { useState, useEffect } from 'react';
import { Box, Text, Input, Stack, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useRouter } from 'next/router';



const ClaimItem = () => {

  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});
  const [itemId, setItemId] = useState(0);
  const [currentUser, setCurrentUser] = useState(0);

  const [inputs, setInputs] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
  });

  const [additionalData, setAdditionalData] = useState({
    claimed_by: currentUser,
    item_id: itemId,
    finder: 1,
    is_valid: false
  });

  async function sendJwtToServer() {
    try {
      const jwtToken = localStorage.getItem('jwtToken');
      const response = await axios.post('http://127.0.0.1:8000/users/info/', {
        jwt: jwtToken
      });
      console.log('Response from server:', response.data);
      setCurrentUser(request.data.id);
    } 
    catch (error) {
      console.error('Error in sending JWT to server:', error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs);
      const response = await axios.post('http://127.0.0.1:8000/claims/', inputs);
      console.log(response.data);

      const timer = setTimeout(() => {
        router.push('/LostItems');
      }, 2000);
    } 
    catch (error) {
      console.error('Error sending the POST request:', error);
    }
  };



  useEffect(() => {
    fetchItemById(id);
    sendJwtToServer();
  }, []);


  async function fetchItemById(itemId) {
    try {
      const response = await axios.post('http://127.0.0.1:8000/itemById/', {
        item_id: itemId
      });
      setItem(response.data);
      setItemId(response.data.id);
    } 
    catch (error) {
      console.error('Error making the POST request:', error);
    }
  }



  return (
    <>
      <Navbar />
      <h1 className='text-center text-4xl font-bold text-purple-900 mt-20'>Claim Item</h1>
      <h1 className='text-center text-lg font-bold mt-4 mb-10'>{item.name}</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
        <label className=''>Q1. {item.question1}</label>
        <input
          type="text"
          name="answer1"
          value={inputs.answer1}
          onChange={handleChange}
          placeholder="Answer 1"
          className='border p-2 mb-4'
        />
        <label>Q1. {item.question2}</label>
        <input
          type="text"
          name="answer2"
          value={inputs.answer2}
          onChange={handleChange}
          placeholder="Answer 2"
          className='border p-2 mb-4'
        />
        <label>Q1. {item.question3}</label>
        <input
          type="text"
          name="answer3"
          value={inputs.answer3}
          onChange={handleChange}
          placeholder="Answer 3"
          className='border p-2 mb-4'
        />
        <button type="submit" className='bg-purple-900 mt-10 text-white font-bold rounded-lg px-10 py-2'>Submit</button>
    </form>
    </>
  );
};

export default ClaimItem;
