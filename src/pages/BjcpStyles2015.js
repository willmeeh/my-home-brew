import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Layout, Typography, Anchor } from 'antd';

import { createStylesDescription } from 'components/BeerStyleDescription'
import bjcpStyles from 'data/bjcp-2015-guideliness-pt-br.min.json';

const { Content, Sider } = Layout;
const { Title } = Typography;
const { Link: AnchorLink } = Anchor;

class BjcpStyles2015 extends Component {
    render() {
        let styles = [];
        bjcpStyles.forEach(category => {
           styles = [ ...styles, ...category.styles ];
        });

        console.log('styles', styles)

        return (
            <Fragment>
                <Title className="text-center">Estilos BJCP 2015</Title>
                <Layout className="page-layout">
                    <Content className="page-content">
                        {createStylesDescription(styles)}
                    </Content>
                    <Sider width={200} className="page-sider">
                        <Anchor offsetTop={64}>
                            {styles.map((style, index) => (
                                <AnchorLink 
                                    key={index}
                                    href={'#anchor' + index} 
                                    title={style.styleName} 
                                />
                            ))}
                        </Anchor>
                    </Sider>
                </Layout>
            </Fragment>
        );
    }
}

export default withRouter(BjcpStyles2015);
