import React from 'react';

const Listing = (props) => {

  const id = props.id;
  const name = props.name;
  const description = props.description;
  const category = props.category;

  const [image, setImage] = useState('');


  // setting default image



  
  return (
    <div className="p-4 mb-4 border rounded-md shadow-md bg-white transition-transform duration-300 hover:transform hover:scale-105">
      {/* <img src={image} alt={title} className="mb-2 rounded-md" /> */}

      <h2 className="text-xl mb-2 text-grey-300 font-bold">{name}</h2>

      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600 font-semibold">{category}</p>
      
    </div>
  );

};

export default Listing;
