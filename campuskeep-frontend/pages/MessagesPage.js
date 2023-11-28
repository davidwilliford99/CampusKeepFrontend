// components/MessagesPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Messages from '../components/Messages';

const MessagesPage = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello Peedee, I think the hat you found is mine!', sender: 'BigFatLoser341', profilePicture: '/images/NC_State_Wolfpack_logo.svg.png' },
  ]);

  const handleSendClick = () => {
    // Add the new message to the messages state
    setMessages([
      ...messages,
      { text: inputText, sender: 'You', profilePicture: '/images/peedee.png' },
    ]);
    // Clear the input text
    setInputText('');
  };

  return (
    <div style={{ backgroundColor: '#F0F0F0', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Navbar />
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#14171A' }}>
          Direct Messages
        </h1>
        <Messages messages={messages} />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            style={{
              flex: '1',
              padding: '10px',
              border: '1px solid #AAB8C2',
              borderRadius: '4px',
              marginRight: '10px',
            }}
          />
          <button
            onClick={handleSendClick}
            style={{
              backgroundColor: '#1DA1F2',
              color: '#FFFFFF',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;

