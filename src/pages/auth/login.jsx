import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Server from '../../server/server';
import './login.less'

const LoginPage = () => {
  const [tel, setTel] = useState('')
  const [pwd, setPassword] = useState('')
  const [role, setRole] = useState('')

  const nav = useNavigate()

  const handleLogin = () => {
    if (role === 1) {
      Server.mLogin(tel, pwd).then((res) => {
        nav('admin/user')
      })
    } else {
      Server.uLogin(tel, pwd).then((res) => {
        localStorage.setItem('id', res.userInfo.id)
        localStorage.setItem('nickname', res.userInfo.nickname)
        localStorage.setItem('sex', res.userInfo.sex)
        localStorage.setItem('location', res.userInfo.location)
        localStorage.setItem('age', res.userInfo.age)
        localStorage.setItem('company', res.userInfo.company)
        localStorage.setItem('tel', res.userInfo.tel)
        nav('chat')
      })
    }
  };

  const handleRegister = () => {
    // 处理注册逻辑
    if (role === 1) {
      Server.mRegister(tel, pwd).then((res) => {
        
      })
    } else {
      Server.uRegister(tel, pwd).then((res) => {
        console.log(res)
      })
    }
    window.location.reload() 
  };

  return (
    <div className='login-page'>
      <h1>基于智能机器人的在线答疑系统</h1>
      <div className='logo'>
        <img src='../loginLogo.png' alt='loginLogo' />
      </div>
      <div className='login-form'>
        <div className='login-name'>
          <span>电话：<br /></span>
          <input type="text" placeholder="请输入电话" onChange={(e) => setTel(e.target.value)} />
        </div>
        <div className='login-pwd'>
          <span>密码：<br /></span>
          <input type="password" placeholder="请输入密码" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='role-selection'>
          <label>
            <input type="radio" name="role" value="admin" onChange={(e) => setRole(1)} />
            管理员
          </label>
          <label>
            <input type="radio" name="role" value="user" onChange={(e) => setRole(0)} />
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
