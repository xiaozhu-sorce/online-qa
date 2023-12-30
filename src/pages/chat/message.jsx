// Message.js
import React from 'react';

const Message = ({ text, sender }) => {
  return (
    <div className={`message ${sender}`}>
      {text}
    </div>
  );
};

export default Message;
