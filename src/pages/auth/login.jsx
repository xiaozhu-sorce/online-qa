import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Server from '../../server/server';
import Modal from 'react-modal';
import './login.less';

const LoginPage = () => {
  const [tel, setTel] = useState('');
  const [pwd, setPassword] = useState('');
  const [role, setRole] = useState('');
  // 弹窗
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const nav = useNavigate();

  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const openErrorModal = () => {
    setIsErrorModalOpen(true);
    // Automatically close the error modal after 3 seconds (adjust as needed)
    setTimeout(() => {
      closeErrorModal();
    }, 3000);
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const handleLogin = () => {
    if (role === 1) {
      Server.mLogin(tel, pwd)
        .then(() => {
          nav('admin/user');
        })
        .catch(() => {
          openErrorModal();
        });
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
    }).catch(() => {
      openErrorModal();
    });
    }
  };

  const handleRegister = () => {
    if (role === 'admin') {
      Server.mRegister(tel, pwd)
        .then(() => {
          openSuccessModal();
        })
        .catch(() => {
          openErrorModal();
        });
    } else {
      Server.uRegister(tel, pwd)
        .then(() => {
          openSuccessModal();
        })
        .catch(() => {
          openErrorModal();
        });
    }
  };

  // 设置弹窗样式
  const successModalStyle = {
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

  const errorModalStyle = {
    content: {
      width: '300px', // smaller width
      height: '120px', // smaller height
      left: '1200px', // position on the right
      top: '10px', // add top positioning
      position: 'fixed', // fixed position
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
        style={{ ...successModalStyle, overlay: { zIndex: 1000 } }}
      >
        <h2>注册成功！</h2>
        <button onClick={closeSuccessModal}>关闭</button>
      </Modal>
      {/* Error Modal */}
      <Modal
        isOpen={isErrorModalOpen}
        onRequestClose={closeErrorModal}
        contentLabel="Error Modal"
        style={{ ...errorModalStyle, overlay: { zIndex: 1000 } }}
      >
        <h2>登录失败，请检查用户名和密码。</h2>
      </Modal>
    </div>
  );
};

export default LoginPage;
