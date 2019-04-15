import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Typography, Anchor, Layout, Card, Col, Row } from 'antd';
import BasicTypography from 'components/BasicTypography';

const { Title, Paragraph } = Typography;
const { Link: AnchorLink } = Anchor;
const { Content, Sider } = Layout;
const { Meta } = Card;

class Equipments extends Component {

    createIdFromTitle(title) {
        return title.trim().replace(/ /, '');
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
    renderImage(src, description) {
        const style = { width: 250 };
        return (
            <Fragment>
                {/* <label>{description}:</label><br/>
                <img style={style} src={} alt={description}/> */}
                <Card
                    style={{ width: 240 }}
                    cover={<img src={src} />}
                >
                    <Meta
                        title={description}
                        />
                </Card>,
            </Fragment>
        );
    }

    render() {
        const texts = [
            {
                'title': 'Kit básico para produzir cerveja',
            },
            {
                'title': 'Moagem dos grãos',
            },
            {
                'title': 'Brassagem',
            },
            {
                'title': 'Hora de aquecer',
            },
            {
                'title': 'Resfriadores (ou chiller)',
                'paragraphs': [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ]
            },
            {
                'title': 'Toques finais',
                'paragraphs': [
                    'Para acabar não posso deixar de mencionar três equipamentos básicos que são essenciais na produção das cervejas',
                    'Termômetro',
                    'Pá cervejeira',
                    'Fixador de tampinhas (e garrafas)',
                    'Nem pense em começar a sua produção sem um termômetro, uma pá cervejeira para mexer a mistura e uma balança para medir a quantidade de malte e de lúpulo, ok?',
                    'Animado para começar sua produção? Então baixe esse artigo em PDF e aprenda em qualquer lugar sobre os equipamentos necessários para produzir cerveja.',
                ]
            },

        ]

        return (
            <Fragment>
                <Layout className="page-layout" >
                    <Content className="page-content" style={{ padding: '5vh 20vh'}}>
                        <Title id={1} level={3}>MOAGEM</Title>
                        <Paragraph>O objetivo da moagem é a quebra do grão visando expor o endosperma, de forma a facilitar a ação das enzimas sobre o amido contido nele. A casca, porém, deve ser mantida o mais intacta possível, pois ela será utilizada para a filtração do mosto.</Paragraph>
                        <Paragraph>Caso a moagem seja muito fina, ela pode entupir durante a lavagem e filtração. Porém, se for grossa demais dificultará a atividade enzimática, gerando uma eficiência baixa.</Paragraph>
                        <Paragraph>Outro detalhe bem importante é não moer muito a casca dos grãos, evitando assim, a adstringência na cerveja final. Sabe aquela sensação de “amarrar” a boca quando comemos banana verde?</Paragraph>
                        <Paragraph>Então, se você moer muito os grãos ou apertá-los muito durante o processo da mostura, pode liberar taninos e com isso a adstringência na cerveja.</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('https://www.hominilupulo.com.br/wp-content/uploads/2011/12/malte-moido.jpg', 'Exemplo de malte moído')}
                            </Col>
                        </Row>
                        Texto Retirado de: https://www.hominilupulo.com.br/cervejas-caseiras/fazer-cerveja-artesanal/

                    </Content>
                    <Sider width={256} className="page-sider">
                        <Anchor offsetTop={64}>
                            {this.createAnchor(texts)}
                        </Anchor>
                    </Sider>
                </Layout>
            </Fragment>
        );
    }
}

export default withRouter(Equipments);
