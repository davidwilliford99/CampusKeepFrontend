"use client"
import React, { useState } from 'react';
import SignUp from './SignUp';
import Link from 'next/link';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-900 text-yellow-200">
      {loggedIn ? (
        <div>
          <h1 className="text-4xl font-bold">Welcome, {username}!</h1>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Login Page</h1>
          <label className="block mb-2">
            Username:
            <input
              className="border p-2 rounded"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label className="block mb-2">
            Password:
            <input
              className="border p-2 rounded"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button
            className="bg-yellow-400 text-purple-900 py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
          <br />
          <Link href="/SignUp" legacyBehavior>
            <a className="py-2 px-2 font-medium text-gray-500 hover:text-gray-700 transition duration-300">
              Don't have an account? Click here
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Login;
