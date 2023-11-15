"use client"
import React, { useState } from 'react';
import SignUp from './SignUp';
import Link from 'next/link';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here (e.g., check username and password against a database)
    // For simplicity, we'll just check if both fields are non-empty
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="Login">
      {loggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div>
          <h1>Login Page</h1>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
          <Link legacyBehavior href="SignUp"><a className="py-2 px-2 font-medium text-gray-500 hover:text-gray-700 transition duration-300">Don't have an account? Click here</a></Link>
        </div>
      )}
    </div>
  );
}

export default Login;
