import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link href="/">
                <a className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">Campus Keep</span>
                </a>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/"><a className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Home</a></Link>
              <Link href="/lost-items"><a className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Lost Items</a></Link>
              <Link href="/categories"><a className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Categories</a></Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link href="/sign-up"><a className="py-2 px-2 font-medium text-gray-500 hover:text-gray-700 transition duration-300">Sign Up / Sign In</a></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



