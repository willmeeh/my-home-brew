import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';

import { createStylesDescription } from 'components/BeerStyleDescription'
import bjcpStyles from 'data/bjcp-2015-guideliness-pt-br.min.json';
import BjcpGuide from "components/BjcpGuide.js";

const SubMenu = Menu.SubMenu;
const { Content, Sider } = Layout;

class BjcpStyles2015 extends Component {
    state = { collapsed: false, selectedStyle: null, barWeight: 200 }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
        if (collapsed) {
            this.setState({ barWeight: 100 });
        } else {
            this.setState({ barWeight: 200 });
        }
    }

    handleClick = (e) => {
        const { key, keyPath } = e;
        if (key === 'guia') {
            this.setState({ selectedStyle: null });
        }
        else {
            const category = bjcpStyles.find((item) => item.categoryName === keyPath[1]);
            if (category && category.styles) {
                const style = category.styles.find((item) => item.styleName === key);
                if (style) {
                    this.setState({ selectedStyle: style });
                }
            }
        }
        window.scrollTo(0, 0);
    }

    createCategoriesMenu(categories) {
        return categories.map(({ categoryName, styles }) => {
            return (
                <SubMenu key={categoryName} title={categoryName}>
                    {styles.map(({ styleName }) => (
                        <Menu.Item key={styleName}>{styleName}</Menu.Item>
                    ))}
                </SubMenu>
            )
        });
    }

    render() {
        const { selectedStyle, barWeight } = this.state;

        return (
            <Fragment>
                <Layout>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        style={{
                            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                        }}>
                        <Menu theme="light" onClick={this.handleClick} defaultSelectedKeys={["guia"]} mode="inline">
                            <Menu.Item key="guia">Guia</Menu.Item>
                            {this.createCategoriesMenu(bjcpStyles)}
                        </Menu>
                    </Sider>
                    <Layout style={{ marginLeft: barWeight }}>
                        <Content className="fixed-page-content">
                            {selectedStyle ? createStylesDescription([selectedStyle]) : <BjcpGuide />}
                        </Content>
                    </Layout>
                </Layout>
            </Fragment>
        );
    }
}

export default withRouter(BjcpStyles2015);
