"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // todo
  };

  return (
    <div className='fixed top-0 left-0 h-screen w-1/2 m-2
                    flex flex-col items-center justify-center
                    bg-purple-800 text-yellow-200'>
      <h2 className='text-4xl text-purple-500 font-bold mb-6'>Sign Up</h2>
      <form className='text-yellow-400' onSubmit={handleSignUp}>
        <label className='mb-4'>
          Email:
          <input className='border p-2 rounded' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label className='mb-4'>
          Password:
          <input className='border p-2 rounded' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className='bg-yellow-400 text-purple-900 py-2 px-4 rounded' type="submit">Sign Up</button>
        <br />
        <Link href="/Login" legacyBehavior>
      <a className="py-4 px-2 text-gray-500 hover:text-gray-700 transition duration-300">Already have an account.</a>
    </Link>
      </form>
    </div>
  );
};

export default SignUp;