import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { CreditCardOutlined, TagsOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const items = [
  {
    key: '1',
    icon: <TagsOutlined />,
    label: 'Shopping Offers',
    path: '/shopping-offers',
  },
  {
    key: '2',
    icon: <CreditCardOutlined />,
    label: 'Cards Wallet',
    path: '/cards-wallet',
  },
];

function AppSider() {
  const theme = {
    token: {
      colorPrimary: '#ffffff', // Replace with your desired color
    },
  };
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{background: theme.token.colorPrimary}}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{ margin: '50px 0px 0' }}>
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default AppSider;
