// components/OneOnOneMessaging.js
import React from 'react';
import Message from './Message';

const OneOnOneMessaging = ({ messages, currentUser }) => {
  return (
    <div>
      <h1>One-on-One Messaging</h1>
      <MessageList messages={messages} currentUser={currentUser} />
      {/* Add input and send button for sending new messages if needed */}
    </div>
  );
};

export default OneOnOneMessaging;
