import React, { Component } from 'react'
import MyHomeBrewMenu from './components/Menu';
import Router from './Router';
import 'antd/dist/antd.css';
import './App.scss';

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <MyHomeBrewMenu />
        </Header>
        <Content style={{ padding: '20px 50px', marginTop: 64, background: '#fff' }}>
          {/* @TODO: Adicionar bredcrumb? */}
          <Router />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
