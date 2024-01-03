import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './login.less'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate()

  const handleLogin = () => {
    // 处理登录逻辑
    nav('admin')
    // nav('user')
    console.log('Login clicked!');
  };

  const handleRegister = () => {
    // 处理注册逻辑
    console.log('Register clicked!');
  };

  return (
    <div className='login-page'>
      <h1>登陆页面</h1>
      <div className='login-form'>
        <div className='login-name'>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='login-pwd'>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="button-container">
        <div className='login-button'>
          <button onClick={handleLogin}>登录</button>
        </div>
        <div className='register-buton'>
          <button onClick={handleRegister}>注册</button>
        </div>
      </div>

    </div>

  );
};

export default LoginPage;
