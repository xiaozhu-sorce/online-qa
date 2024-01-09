import React, { useState, useEffect } from 'react';
import Server from '../../server/server';
import './ProfileEdit.less';
import Modal from 'react-modal';

const ProfileEdit = () => {
  const [nickname, setNickname] = useState(localStorage.getItem("nickname"));
  const [tel, setTel] = useState(localStorage.getItem("tel"));
  const [sex, setSex] = useState(localStorage.getItem("sex"));
  const [age, setAge] = useState(localStorage.getItem("age"));
  const [company, setCompany] = useState(localStorage.getItem("company"));
  const [location, setLocation] = useState(localStorage.getItem("location"));

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const openSaveModal = () => {
    setIsSaveModalOpen(true);
    // Automatically close the error modal after 3 seconds (adjust as needed)
    setTimeout(() => {
      closeSaveModal();
    }, 3000);
  };

  const closeSaveModal = () => {
    setIsSaveModalOpen(false);
  };
  // Server.getUserInfo(parseFloat(localStorage.getItem("id"))).then((res) => {
  //   // setNickname(res.userInfo.nickname)
  //   // setTel(res.userInfo.tel)
  //   // setAge(res.userInfo.age)
  //   // setLocation(res.userInfo.location)
  //   // setCompany(res.userInfo.company)
  //   // setData(res.userInfo)
  //   // data = res.userInfo
  //   console.log(data)
  // })

  const handleSave = () => {
    // 处理保存逻辑
    const newData = {
      id: parseFloat(localStorage.getItem("id")),
      nickname: nickname,
      tel: tel,
      sex: sex,
      age: parseFloat(age),
      company: company,
      location: location
    };

    localStorage.setItem('nickname', nickname)
    localStorage.setItem('sex', sex)
    localStorage.setItem('location', location)
    localStorage.setItem('age', age)
    localStorage.setItem('company', company)
    localStorage.setItem('tel', tel)
    Server.modifyInfo(newData).then((res) => {
      openSaveModal();
    })
  };
  const saveModalStyle = {
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
    <div className="profile-edit-container">
      <img src="../logo.png" alt="Logo" className="logo" />
      <div className="info-container">
        <div className="info-row">
          <label>昵称：</label>
          <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <label>性别：</label>
          <select value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div className="info-row">
          <label>年龄：</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          <label>地址：</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="info-row">
          <label>电话：</label>
          <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} />
          <label>公司：</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
      </div>
      <button onClick={handleSave}>保存</button>
      <Modal
        isOpen={isSaveModalOpen}
        onRequestClose={closeSaveModal}
        contentLabel="Save success Modal"
        style={{ ...saveModalStyle, overlay: { zIndex: 1000 } }}
      >
        <h2>保存成功！</h2>
      </Modal>
    </div>
  );
};

export default ProfileEdit;
