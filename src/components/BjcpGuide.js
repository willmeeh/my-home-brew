import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Typography, Anchor, Layout } from 'antd';

import bjcpGuideData from 'data/bjcp-2015-guideliness-pt-br-guide.json';

const { Title, Paragraph } = Typography;
const { Link: AnchorLink } = Anchor;
const { Content, Sider } = Layout;

class BeerStyleDescription extends Component {

    createIdFromTitle(title) {
        return title.trim().replace(/ /, '');
    }

    createContent(bjcpGuideData) {
        return bjcpGuideData.map(({ title, paragraphs }) => (
            <Fragment>
                <Title level={3} id={this.createIdFromTitle(title)}>{title}</Title>
                {paragraphs.map((p) => (
                    <Paragraph>
                        <span dangerouslySetInnerHTML={{ __html: p }}></span>
                    </Paragraph>
                ))}
            </Fragment>
        ));
    }

    createAnchor(bjcpGuideData) {
        return bjcpGuideData.map(({ title }) => (
            <Fragment>
                <AnchorLink 
                    href={'#' + this.createIdFromTitle(title)} 
                    title={title} 
                />
            </Fragment>
        ));
    }

    render() {
        return (
            <Fragment>
                <Layout className="page-layout">
                    <Content className="page-content">
                        {this.createContent(bjcpGuideData)}
                    </Content>
                    <Sider width={256} className="page-sider">
                        <Anchor offsetTop={64}>
                            {this.createAnchor(bjcpGuideData)}
                        </Anchor>
                    </Sider>
                </Layout>
            </Fragment>
        );
    }
}

export default withRouter(BeerStyleDescription);