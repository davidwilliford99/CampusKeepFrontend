// components/Messages.js
import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

export default Messages;
