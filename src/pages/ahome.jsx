import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, useOutlet } from 'react-router';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './home.less'

const { Header, Sider, Content } = Layout;

const AHome = () => {
  const [collapsed, setCollapsed] = useState(false);
  const nav = useNavigate()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '用户列表',
              onClick: () => {
                nav('user')
              }
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '用户使用数据',
              onClick: () => {
                nav('data')
              }
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}

          <div style={{ float: 'right', marginRight: '100px', fontSize: '20px', fontWeight: 'bold' }}>
            <span>基于智能机器人的在线答疑系统</span>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            minHeight: 280,
          }}
        >
          {useOutlet()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AHome;
