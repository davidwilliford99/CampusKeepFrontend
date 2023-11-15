// UploadItem.js
import React, { useState } from 'react';
import Listing from '../components/Listing';

const UploadItem = () => {
  
  const [ItemName, setItem] = useState('');
  const [Description, setDescription] = useState('');

  const handleUpload = (e) => {
    e.preventDefault();
    // todo
  };

  return (
    <div>
      <h1>Upload an item</h1>
      <div>
      <label>
          Item Name:
          <input type="text" value={ItemName} onChange={(e) => setItem(e.target.value)} />
        </label>
      < br/>
      <label>
          Item Description:
          <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} />
        </label>
      </div>
    </div>
  );
};

export default UploadItem;