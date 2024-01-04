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
    nav('user')
    console.log('Register clicked!');
  };

  return (
    <div className='login-page'>
      <h1>基于智能机器人的在线答疑系统</h1>
      <div className='logo'>
          <img src='../loginLogo.png' alt='loginLogo' />
       </div>
      <div className='login-form'>
        <div className='login-name'>
          <span>用户：<br /></span>
          <input type="text" placeholder="请输入账号" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='login-pwd'>
          <span>密码：<br /></span>
          <input type="password" placeholder="请输入密码" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='role-selection'>
    <label>
      <input type="radio" name="role" value="admin" />
      管理员
    </label>
    <label>
      <input type="radio" name="role" value="user" />
      用户
    </label>
  </div>
      </div>
      <div className="button-container">
        <div className='login-button'>
          <button onClick={handleLogin}>登录</button>
        </div>
        <div className='register-button'>
          <button onClick={handleRegister}>注册</button>
        </div>
      </div>

    </div>

  );
};

export default LoginPage;
