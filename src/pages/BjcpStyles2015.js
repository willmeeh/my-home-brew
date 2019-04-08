import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';

import { createStylesDescription } from 'components/BeerStyleDescription'
import bjcpStyles from 'data/bjcp-2015-guideliness-pt-br.min.json';
import BjcpGuide from "components/BjcpGuide.js";

const SubMenu = Menu.SubMenu;
const { Content, Sider } = Layout;

class BjcpStyles2015 extends Component {
    state = { selectedStyle: null }

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
        const { selectedStyle } = this.state;

        return (
            <Fragment>
                <Layout className="page-layout">
                    <Sider width={256} className="fixed-page-sider">
                        <Menu
                            onClick={this.handleClick}
                            defaultSelectedKeys={["guia"]}
                            style={{ width: 256 }}
                            mode="inline"
                        >
                            <Menu.Item key="guia">Guia</Menu.Item>
                            {this.createCategoriesMenu(bjcpStyles)}
                        </Menu>
                    </Sider>
                    <Content className="fixed-page-content">
                        {selectedStyle ? createStylesDescription([selectedStyle]) : <BjcpGuide />}
                    </Content>
                </Layout>
            </Fragment>
        );
    }
}

export default withRouter(BjcpStyles2015);
