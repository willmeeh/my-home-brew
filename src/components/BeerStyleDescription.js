import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Row, Col, Typography } from 'antd';
import Glass from "components/Glass";

const { Title, Paragraph } = Typography;

export const createStylesDescription = (styles) => {
    return styles.map((style, index) => {
        const anchorId = 'anchor' + index;
        return <BeerStyleDescription id={anchorId} key={index} {...style}/>
    });
}

class BeerStyleDescription extends Component {

    render() {
        const { styleName, abv, ibu, foamColor, liquidColor, descriptions, id } = this.props;

        const containerStyle = {
            alignItems: 'center',
            marginBottom: '4em'
        }

        return (
            <Row id={id} type="flex" style={containerStyle}>
                <Col span={5}>
                    <Glass 
                        corEspuma={foamColor}
                        corLiquido={liquidColor}
                        abv={abv}
                        ibu={ibu}
                    />
                </Col>
                <Col span={19}>
                    <Row>
                        <Col span={24}>
                            <Title level={4}>{styleName}</Title>
                            {descriptions.map((description, index) => (
                                <Paragraph key={index}>
                                    {description}
                                </Paragraph>
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withRouter(BeerStyleDescription);
