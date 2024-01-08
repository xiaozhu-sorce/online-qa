import React, { useState } from 'react';
import Server from '../../server/server';
import './password.less';

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = () => {
    // 处理密码修改逻辑
    const newData = {
      id: parseFloat(localStorage.getItem("id")),
      pwd: newPassword
    };
    Server.modifyPwd(newData).then((res) => {
      console.log(newData)
    })
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
    </div>
  );
};

export default Password;

