import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Select } from '@chakra-ui/react';

const UploadItem = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [SecQ1, setQ1] = useState('');
  const [SecQ2, setQ2] = useState('');
  const [SecQ3, setQ3] = useState('');

  const handleUpload = (e) => {
    e.preventDefault();
    // TODO: Implement image upload logic
    console.log('Item Name:', itemName);
    console.log('Description:', description);
    console.log('Image:', image);
    console.log('Category:', category);
    console.log('Security Question 1:', SecQ1)
    console.log('Security Question 2:', SecQ2)
    console.log('Security Question 3:', SecQ3)
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-violet-900 text-black-200">
        <div className="w-4/5 md:w-3/4 lg:w-2/3 p-6 bg-white rounded shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-violet-900">Upload an Item</h1>
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-black-300">Item Name:</label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-violet-900"
                required
              />
            </div>

            <div>
              <label className="block text-black-300">Item Category:</label>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              >
                <option value="" disabled>Select category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Headphones">Headphones</option>
              </Select>
            </div>

            <div>
              <label className="block text-black-300">Item Description:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black-300">Item Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black-300">Security Question 1:</label>
              <input
                type="text"
                value={SecQ1}
                onChange={(e) => setQ1(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black-300">Security Question 2:</label>
              <input
                type="text"
                value={SecQ2}
                onChange={(e) => setQ2(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-black-300">Security Question 3:</label>
              <input
                type="text"
                value={SecQ3}
                onChange={(e) => setQ3(e.target.value)}
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
