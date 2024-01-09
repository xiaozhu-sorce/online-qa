import React, { useState } from 'react';
import Server from '../../server/server';
import './password.less';
import Modal from 'react-modal';

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);

  const openChangeModal = () => {
    setIsChangeModalOpen(true);
    // Automatically close the error modal after 3 seconds (adjust as needed)
    setTimeout(() => {
      closeChangeModal();
    }, 3000);
  };

  const closeChangeModal = () => {
    setIsChangeModalOpen(false);
  };

  const handleChange = () => {
    // 处理密码修改逻辑
    const newData = {
      id: parseFloat(localStorage.getItem("id")),
      pwd: newPassword
    };
    Server.modifyPwd(newData).then((res) => {
      openChangeModal();
      console.log(newData)
    })
  };
  const changeModalStyle = {
    content: {
      width: '150px', // smaller width
      height: '90px', // smaller height
      left: '1350px', // position on the right
      top: '10px', // add top positioning
      position: 'fixed', // fixed position
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  return (
    <div className="password-change-container">
      <img src="../logo.png" alt="Logo" className="logo" />
      <div className="input-container">
        <label htmlFor="currentPassword">请输入原密码</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="newPassword">请输入新密码</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="confirmPassword">确认密码</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button onClick={handleChange}>确定</button>
      <Modal
        isOpen={isChangeModalOpen}
        onRequestClose={closeChangeModal}
        contentLabel="change success Modal"
        style={{ ...changeModalStyle, overlay: { zIndex: 1000 } }}
      >
        <h2>修改成功！</h2>
      </Modal>
    </div>
  );
};

export default Password;

