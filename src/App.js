import AppHeader from './components/header.js';
import AppSider from './components/sider.js';
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Layout } from 'antd';
const { Content, Footer } = Layout;

function App() {

  const theme = {
    token: {
      colorPrimary: '#ffffff',
      fontFamily: 'BlinkMacSystemFont',
    },
  };

  return (
    
    <Layout style={{ minHeight: '100vh', fontFamily: theme.token.fontFamily }}>
      <AppSider />
      <Layout >
        <AppHeader/>
        <Content style={{ margin: '0px 1px 0', minHeight:'100hv' }} >
          <div style={{ padding: 24, minHeight: 650, background: theme.token.colorPrimary }}>MoneySavvy Test</div>
        </Content>
       
      </Layout>
    </Layout>
  );
}

export default App;
