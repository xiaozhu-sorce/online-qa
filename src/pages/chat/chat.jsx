// Chat.js
import React, { useState } from 'react';
import Message from './message';

const Chat = ({ user }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    // 处理发送消息逻辑，可以调用后端 API
    // 示例：将用户输入的消息添加到消息列表
    setMessages([...messages, { text: input, sender: 'user' }]);
    // 清空输入框
    setInput('');
  };

  return (
    <div>
      <div className="message-container">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))}
      </div>
      <div className="input-container">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
