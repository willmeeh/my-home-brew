import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

class BasicTypography extends Component {

    createIdFromTitle(title) {
        return title.trim().replace(/ /, '');
    }

    createContent(texts) {
        return texts.map(({ title, paragraphs }) => (
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

    render() {
        const { texts } = this.props
        return (
            <Fragment>
                {this.createContent(texts)}
            </Fragment>
        );
    }
}

export default withRouter(BasicTypography);
