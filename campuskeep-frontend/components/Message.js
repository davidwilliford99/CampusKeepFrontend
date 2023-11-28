// components/Message.js
import React from 'react';

const Message = ({ text, sender, profilePicture }) => {
  return (
    <div style={{ display: 'flex', marginBottom: '16px' }}>
      <img
        src={profilePicture}
        alt={`${sender}'s profile`}
        style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '12px' }}
      />
      <div>
        <p style={{ margin: '0', fontSize: '14px', fontWeight: '600', color: '#14171A' }}>
          {sender}
        </p>
        <p style={{ margin: '0', fontSize: '16px', color: '#14171A' }}>{text}</p>
      </div>
    </div>
  );
};

export default Message;