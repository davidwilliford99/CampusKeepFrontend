import React, { useState, useEffect } from 'react';
import { Box, Text, Input, Stack, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useRouter } from 'next/router';



const ClaimItem = () => {

  const [answers, setAnswers] = useState({ answer1: '', answer2: '', answer3: '' });
  const [itemId, setItemId] = useState(null);
  const [claimedBy, setClaimedBy] = useState(null);
  const [item, setItem] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [complete, setComplete] = useState(false);
  const router = useRouter();

  // Fetch item ID from URL query
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setItemId(query.get('id'));

    const postItemId = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/itemById/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ item_id: query.get('id')})
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Response:', data);
        setItem(data);
      } 
      catch (error) {
        console.error('Error in POST request:', error);
      }
    };

    postItemId();
  }, []);

  // Checks if user is logged in
  useEffect(() => {
    const jwt = localStorage.getItem('jwtToken');
    if (jwt) {
      setLoggedIn(true);
    }
  }, []);

  // Fetch user information
  useEffect(() => {
    const jwt = localStorage.getItem('jwtToken');
    if (jwt) {
      axios.post('http://127.0.0.1:8000/users/info/', { jwt })
        .then(response => {
          console.log(response.data);
          setClaimedBy(response.data.id);
        })
        .catch(error => console.error('Error fetching user info:', error));
    }
  }, []);


  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers.answer1, answers.answer2, answers.answer3, claimedBy, itemId);
    const claimData = { ...answers, claimed_by: claimedBy, item_id: itemId, finder: 1, is_valid: false };

    axios.post('http://127.0.0.1:8000/claims/', claimData)
      .then(response => {
        console.log('Claim submitted:', response.data);
        
        setComplete(true);
        const timer = setTimeout(() => {
          router.push('/LostItems');
        }, 2000);
      })
      .catch(error => console.error('Error submitting claim:', error));
  };

  return (
    <>
      <Navbar/>
      <form onSubmit={handleSubmit} className='my-20 flex flex-col items-center justify-center'>
        {
          !loggedIn && <p className='text-center rounded-lg bg-red-500 px-8 py-3 text-white mb-10'>You must log in before submitting claims</p>
        }
        {
          complete && <p className='text-center rounded-lg bg-green-500 px-8 py-3 text-white mb-10'>Claim submitted! You will hear back shortly</p>
        }
        <h1 className='text-4xl font-bold mb-5'>Claim Item</h1>
        <label>{item.question1}</label>
        <input 
          name="answer1" 
          value={answers.answer1} 
          onChange={handleChange} 
          placeholder="Answer 1"
          className='border border-black p-2 rounded-lg mb-3'
        />
        <label>{item.question2}</label>
        <input 
          name="answer2" 
          value={answers.answer2} 
          onChange={handleChange} 
          placeholder="Answer 2"
          className='border border-black p-2 rounded-lg mb-3'
        />
        <label>{item.question3}</label>
        <input 
          name="answer3" 
          value={answers.answer3} 
          onChange={handleChange} 
          placeholder="Answer 3"
          className='border border-black p-2 rounded-lg mb-3'
        />
        <button type="submit" className='bg-purple-900 text-white font-bold rounded-lg px-7 py-2'>Submit Claim</button>
      </form>
    
    </>

  );


};

export default ClaimItem;
