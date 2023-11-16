import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const UploadItem = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    // TODO: Implement image upload logic
    console.log('Item Name:', itemName);
    console.log('Description:', description);
    console.log('Image:', image);
  };

  return (
    <><Navbar/>
    <div className="flex items-center justify-center h-screen bg-violet-900 text-black-200">
      <div className="w-1/2 p-8 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-violet-900">Upload an Item</h1>
        <form onSubmit={handleUpload}>
          <div className="mb-4">
            <label className="block text-black-300">
              Item Name:
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-violet-900"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-black-300">
              Item Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-black-300">
              Item Image:
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-purple-500"
                required
              />
            </label>
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