import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Select } from '@chakra-ui/react';
import axios from 'axios';


const UploadItem = () => {

  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [foundBy, setFoundBy] = useState(0);
  const [SecQ1, setQ1] = useState('');
  const [SecA1, setA1] = useState('');
  const [SecQ2, setQ2] = useState('');
  const [SecA2, setA2] = useState('');
  const [SecQ3, setQ3] = useState('');
  const [SecA3, setA3] = useState('');
  const [user, setUser] = useState('');


  const postData = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/items/', data);
      console.log(response.data);
    } 
    catch (error) {
      console.error("Error posting data: ", error);
    }
  };



  const handleUpload = () => {
    const data = {
      name: itemName,
      category: category,
      description: description,
      question1: SecQ1,
      answer1: SecA1,
      question2: SecQ2,
      answer2: SecA2,
      question3: SecQ3,
      answer3: SecA3,
      found_by: 1,
      is_found: true,
    };

    postData(data);
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center bg-purple-900 text-black-200">
        <div className="w-4/5 my-20 md:w-3/4 lg:w-2/3 p-6 bg-white rounded shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-purple-900">Upload Item</h1>
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-black-300 font-bold">Name:</label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-900"
                required
              />
            </div>

            <div>
              <label className="block text-black-300 font-bold">Item Category:</label>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              >
                <option value="" disabled>Select category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="school supplies">School Supplies</option>
                <option value="other">Other</option>
              </Select>
            </div>

            <div>
              <label className="block text-black-300 font-bold">Item Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="h-24 border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black-300 font-bold">Item Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-black-300 font-bold">Security Question 1:</label>
              <input
                type="text"
                value={SecQ1}
                onChange={(e) => setQ1(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black-300 font-bold">Security Question 1 Answer:</label>
              <input
                type="text"
                value={SecA1}
                onChange={(e) => setA1(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black-300 font-bold">Security Question 2:</label>
              <input
                type="text"
                value={SecQ2}
                onChange={(e) => setQ2(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black-300 font-bold">Security Question 2 Answer:</label>
              <input
                type="text"
                value={SecA2}
                onChange={(e) => setA2(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black-300 font-bold">Security Question 3:</label>
              <input
                type="text"
                value={SecQ3}
                onChange={(e) => setQ3(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black-300 font-bold">Security Question 3 Answer:</label>
              <input
                type="text"
                value={SecA3}
                onChange={(e) => setA3(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadItem;
