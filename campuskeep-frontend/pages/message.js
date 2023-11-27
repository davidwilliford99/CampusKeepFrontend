import Navbar from '../components/Navbar';
import React from 'react';
import Link from 'next/link';
import ChatEngineCore from 'react-chat-engine'; 
import ChatEngineAdvanced from 'react-chat-engine-advanced';

const CampusKeepsMessages = () => {

  return (
    <ChatEngineAdvanced
      projectID="lost_and_found_project" 
      userName="admin" 
      userSecret="123456"
      height="100vh"
      customParsers={[
        
      ]}
      customMiddleware={[
        
      ]}
    />
  );

};

export default CampusKeepsMessages;