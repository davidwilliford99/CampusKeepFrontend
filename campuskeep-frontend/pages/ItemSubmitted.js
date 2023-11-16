import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const ItemSubmitted = () => {
  const router = useRouter();

  return (
    <><Navbar/>
    <div className="flex items-center justify-center h-screen bg-violet-900 text-black-200">
      <div className="w-1/2 p-8 bg-white rounded shadow-md text-center">
        <h1 className="text-4xl font-bold mb-8 text-violet-900">Congratulations!</h1>
        <p className="text-lg mb-4">
          Your item has been successfully submitted. Thank you for contributing to our site!
        </p>
        <button
          className="bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300"
          onClick={() => router.push('/LostItems')}
        >
          View Listings
        </button>
        <br />
        <Link href="/UploadItem" legacyBehavior passHref>
          <a className="text-gray-500 hover:text-gray-700 transition duration-300 mt-4 block">
            Upload Another Item
          </a>
        </Link>
      </div>
    </div>
    </>
  );
};

export default ItemSubmitted;
