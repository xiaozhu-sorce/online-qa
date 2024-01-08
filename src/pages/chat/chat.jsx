// Chat.js
import React, { useState } from 'react';
import { Input, Button, List } from 'antd';
import Message from './message';
import {
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router';
import axios from 'axios';
import OpenAI from 'openai';

const ChatApp = () => {
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const nav = useNavigate()

  // const { Configuration, OpenAIApi } = require('openai')

  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY
  // })
  // const openai = new OpenAIApi(configuration)

    // (async () => {
    //   const gptResponse = await openai.complete({
    //     engine: 'davinci',
    //     prompt: 'this is a test',
    //     maxTokens: 5,
    //     temperature: 0.9,
    //     topP: 1,
    //     presencePenalty: 0,
    //     frequencyPenalty: 0,
    //     bestOf: 1,
    //     n: 1,
    //     stream: false,
    //     stop: ['\n', "testing"]
    //   });

    //   console.log(gptResponse.data);
    // })();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
  //   if (inputValue.trim() === '') return;

  //   // 将用户的消息添加到聊天历史
  //   setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', message: inputValue }]);
  //   setInputValue('');

  //   try {
  //     // 调用 OpenAI API 获取机器人的回复
  //     const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
  //       messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: inputValue }],
  //     });

  //     // 将机器人的回复添加到聊天历史
  //     setChatHistory((prevHistory) => [...prevHistory, { sender: 'bot', message: response.data.choices[0].message.content }]);
  //   } catch (error) {
  //     console.error('Error calling OpenAI API:', error);
  //   }
  };

  const handleUser = () => {
    nav('/user/profile')
  }

  return (
    <div style={{ width: 400, margin: 'auto', marginTop: 50 }}>
      <List
        dataSource={chatHistory}
        renderItem={(item) => (
          <List.Item style={{ textAlign: item.sender === 'user' ? 'right' : 'left' }}>
            {item.message}
          </List.Item>
        )}
      />
      <div style={{ marginTop: 16 }}>
        <Input value={inputValue} onChange={handleInputChange} />
        <Button type="primary" onClick={handleSendMessage} style={{ marginLeft: 8 }}>
          发送
        </Button>
      </div>
      <Button
        onClick={handleUser}
        type="primary"
        icon={<UserOutlined />}
        style={{
          marginBottom: 16,
          background: 'transparent',
          border: 'none',
          color: 'black',
        }}
      >
      </Button>
    </div>
  );
};

export default ChatApp;

