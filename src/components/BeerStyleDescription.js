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
        const { 
            id,
            styleName, 
            generalImpression,
            aroma,
            appearance,
            flavor,
            mouthSensation,
            comments,
            history,
            characteristicIngredients,
            stylesComparison,
            businessExamples,
        } = this.props;

        const containerStyle = {
            alignItems: 'center',
            marginBottom: '4em'
        }

        return (
            <Row id={id} style={containerStyle}>
                <Col span={5}>
                    <Glass {...this.props} />
                </Col>
                <Col span={19}>
                    <Row>
                        <Col span={24}>
                            <Title level={3}>{styleName}</Title>
                            <Paragraph>{generalImpression}</Paragraph>

                            <Title level={4}>Aroma</Title>
                            <Paragraph>{aroma}</Paragraph>

                            <Title level={4}>Aparência</Title>
                            <Paragraph>{appearance}</Paragraph>

                            <Title level={4}>Sabor</Title>
                            <Paragraph>{flavor}</Paragraph>

                            <Title level={4}>Sensação na boca</Title>
                            <Paragraph>{mouthSensation}</Paragraph>

                            <Title level={4}>Comentários</Title>
                            <Paragraph>{comments}</Paragraph>

                            <Title level={4}>História</Title>
                            <Paragraph>{history}</Paragraph>

                            <Title level={4}>Ingredientes característicos</Title>
                            <Paragraph>{characteristicIngredients}</Paragraph>

                            <Title level={4}>Comparação de estilos</Title>
                            <Paragraph>{stylesComparison}</Paragraph>

                            <Title level={4}>Exemplos comerciais</Title>
                            <Paragraph>{businessExamples}</Paragraph>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withRouter(BeerStyleDescription);
