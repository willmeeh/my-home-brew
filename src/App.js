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
                <Header className="header">
                    <MyHomeBrewMenu />
                </Header>
                <Content className="content">
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
