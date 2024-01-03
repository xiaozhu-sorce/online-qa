import React, { useState } from 'react';
import './ProfileEdit.less';

const ProfileEdit = () => {
  const [nickname, setNickname] = useState('小明');
  const [gender, setGender] = useState('男');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');

  const handleSave = () => {
    // 处理保存逻辑
    console.log('Save clicked!');
  };

  return (
    <div className="profile-edit-container">
      <img src="./logo.png" alt="Logo" className="logo" />
      <div className="info-container">
        <div className="info-row">
          <label>昵称：</label>
          <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <label>性别：</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div className="info-row">
          <label>年龄：</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          <label>地址：</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="info-row">
          <label>电话：</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <label>公司：</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
      </div>
      <button onClick={handleSave}>保存</button>
    </div>
  );
};

export default ProfileEdit;
