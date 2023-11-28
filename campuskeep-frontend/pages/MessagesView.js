// components/MessagesView.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MessagesView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const [conversations, setConversations] = useState([
    { userId: 'john', username: 'John Doe', lastMessage: 'Hello!', unreadCount: 2 },
    { userId: 'jane', username: 'Jane Smith', lastMessage: 'Hi there!', unreadCount: 0 },
  ]);

  useEffect(() => {
    // Simulating fetching conversations data based on userId
    // Replace this with your actual data fetching logic
    // For example, fetch conversations from an API using userId
    // const fetchData = async () => {
    //   const result = await fetch(`/api/conversations?userId=${userId}`);
    //   const data = await result.json();
    //   setConversations(data);
    // };
    // fetchData();
  }, [userId]);

  return (
    <div style={{ backgroundColor: '#8E44AD', minHeight: '100vh', fontFamily: 'Arial, sans-serif', color: '#FFFFFF' }}>
      <Navbar />
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Conversations</h1>
        {conversations.map((conversation) => (
          <Link key={conversation.userId} legacyBehavior href={`/MessagesPage?userId=${conversation.userId}`}>
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
                border: '1px solid #FFFFFF',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>{conversation.username}</p>
                <p style={{ margin: '0', fontSize: '14px' }}>{conversation.lastMessage}</p>
              </div>
              {conversation.unreadCount > 0 && (
                <div style={{ backgroundColor: '#FFFFFF', color: '#8E44AD', padding: '8px', borderRadius: '50%' }}>
                  {conversation.unreadCount}
                </div>
              )}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MessagesView;
