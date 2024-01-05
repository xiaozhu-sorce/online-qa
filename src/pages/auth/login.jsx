import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Server from '../../server/server';
import Modal from 'react-modal';
import './login.less'

const LoginPage = () => {
  const [tel, setTel] = useState('')
  const [pwd, setPassword] = useState('')
  const [role, setRole] = useState('')
  // 弹窗
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const nav = useNavigate()

  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const handleLogin = () => {
    if (role === 1) {
      Server.mLogin(tel, pwd).then((res) => {
        nav('admin/user')
      })
    } else {
      Server.uLogin(tel, pwd).then((res) => {
        nav('chat')
      })
    }
  };

  const handleRegister = () => {
    if (role === 'admin') {
      Server.mRegister(tel, pwd)
        .then(() => {
          openSuccessModal();
          // 在延迟或基于用户交互的情况下，你可以选择在这里重新加载页面。
          // window.location.reload();
        })
        .catch((error) => {
          // 处理注册错误
          console.error('注册失败：', error);
        });
    } else {
      Server.uRegister(tel, pwd)
        .then(() => {
          openSuccessModal();
          // 在延迟或基于用户交互的情况下，你可以选择在这里重新加载页面。
          // window.location.reload();
        })
        .catch((error) => {
          // 处理注册错误
          console.error('注册失败：', error);
        });
    }
  };
  // 设置弹窗样式
  const modalStyle = {
    content: {
      width: '300px',
      height: '200px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
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
      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        contentLabel="Registration Success Modal"
        style={{ ...modalStyle, overlay: { zIndex: 1000 } }} // 设置覆盖层样式和弹窗样式
      >
        <h2>注册成功！</h2>
        <button onClick={closeSuccessModal}>关闭</button>
      </Modal>
    </div>

  );
};

export default LoginPage;
