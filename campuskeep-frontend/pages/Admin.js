import React, { useState, useEffect } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import axios from 'axios';


const Admin = () => {
  const [claims, setClaims] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/claims/');
        setClaims(response.data.filter(claim => !claim.is_valid));
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    const fetchItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/items/');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchClaims();
    fetchItems();
  }, []);

  // Function to find item by ID
  const findItemById = (itemId) => items.find(item => item.id === itemId);

  const handleVerifyClaim = async (claimId) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/verifyClaim/', { claim_id: claimId });
      console.log('Claim verified:', response.data);
      // Additional logic after verifying the claim
    } catch (error) {
      console.error('Error verifying claim:', error);
    }
  };

  const handleDenyClaim = async (claimId) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/denyClaim/', { claim_id: claimId });
      console.log('Claim denied:', response.data);
      // Additional logic after denying the claim
    } catch (error) {
      console.error('Error denying claim:', error);
    }
  };

  return (
    <>
      <Navbar/>

      <div className='bg-purple-900 min-h-screen p-20'>
        <h1 className='text-white text-4xl font-bold text-center mb-10'>Admin Page</h1>
        <div className='flex gap-6'>


          {claims.map((claim, index) => {
            const correspondingItem = findItemById(claim.item_id);

            return (
              <div key={index} className='bg-neutral-200 rounded-lg shadow-xl px-5 py-3'>
                <p className='text-center font-bold text-2xl'>{correspondingItem.name}</p>
                <p className='font-bold mt-5'>Claim Answers</p>
                <p className='mb-2'>{claim.answer1}, {claim.answer2}, {claim.answer3}</p>
                {correspondingItem && (
                  <div>
                    <p className='font-bold'>Actual Answers</p>
                    <p className='mb-2'>
                      {correspondingItem.answer1}, {correspondingItem.answer2}, {correspondingItem.answer3}
                    </p>
                  </div>
                )}
                <div className='flex gap-4 '>
                  <button onClick={() => handleVerifyClaim(claim.id)} className='bg-green-600 text-white font-bold rounded-lg px-7 py-2'>Accept</button>
                  <button onClick={() => handleDenyClaim(claim.id)} className='bg-red-600 text-white font-bold rounded-lg px-7 py-2'>Deny</button>
                </div>
              </div>

              
            );
          })}


        </div>
      </div>
    </>

  );
};

export default Admin;
