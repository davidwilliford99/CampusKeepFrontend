// DisplayListings.js
import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing';
import { Box, Select } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';



const DisplayListings = () => {

  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get('http://127.0.0.1:8000/items/');
      setItems(response.data);
    };
    fetchItems();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    router.push(`/LostItems?category=${category}`);
  };

  // Dummy data for the listings


  return (
    <>
      <Navbar/>

      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-900 text-black-200">
        <div className="w-3/4 p-8 bg-neutral-100 rounded shadow-md my-20">

          <div id='title-area' className='flex justify-between mb-14'>
            <h1 className="text-4xl font-bold mb-8 text-black-200">Recently found items</h1>

            {/* Dropdown for selecting categories */}
            <Select
              placeholder="All Categories"
              mb="4"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              width={"50%"}
            >
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Headphones">Headphones</option>
              <option value="Other">Other</option>
            </Select>
          </div>


          {/* Display filtered listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <Link key={item.id} legacyBehavior href={`/ClaimItem?id=${item.id}`} passHref>
                <a>
                  <Listing 
                    id={item.id}
                    name={item.name}  
                    description={item.description} 
                    category={item.category}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayListings;
