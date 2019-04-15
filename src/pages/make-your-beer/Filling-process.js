import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Typography, Anchor, Layout, Card, Col, Row } from 'antd';

const { Title, Paragraph } = Typography;
const { Link: AnchorLink } = Anchor;
const { Content, Sider } = Layout;
const { Meta } = Card;

class Equipments extends Component {

    createIdFromTitle(title) {
        return title.trim().replace(/ /, '');
    }

    createAnchor(bjcpGuideData) {
        return bjcpGuideData.map(({ title }, index) => (
            <Fragment key={'anchor' + index}>
                <AnchorLink
                    href={'#' + this.createIdFromTitle(title)}
                    title={title}
                />
            </Fragment>
        ));
    }
    renderImage(src, description) {
        return (
            <Fragment>
                <Card
                    style={{ width: 240 }}
                    cover={<img alt={description} src={src} />}
                >
                    <Meta
                        title={description}
                        />
                </Card>
            </Fragment>
        );
    }

    render() {
        const texts = [
            { 'title': 'Envase' },
            { 'title': 'Armazenamento das garrafas' }
        ]

        return (
            <Fragment>
                <Layout className="page-layout" >
                    <Content className="page-content" style={{ padding: '2vh 10vh' }}>
                        <Title id={this.createIdFromTitle('Envase')} level={3}>Envase</Title>
                        <Paragraph>Com o priming preparado e a nossa preciosa cerveja devidamente transferida para outro balde, iniciaremos agora o envase da cerveja artesanal.</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('http://www.condadodacerveja.com.br/wp-content/uploads/2015/06/envase.jpg', 'Cerveja envasada')}
                            </Col>
                        </Row>
                        <Paragraph>Uma dica importante: separe uma quantidade suficiente de garrafas para acomodar toda sua cerveja e faça a devida limpeza e sanitização delas. Isso pode ser feito durante a preparação do açúcar invertido ou até mesmo antes.</Paragraph>
                        <Paragraph>Limpe as garrafas com uma escova – daquelas de limpar mamadeira – e um pouco de detergente neutro, se preocupando em retirar toda sujeira que estiver no interior das garrafas. Enxágue-as muito bem! Após a limpeza faça a sanitização de todas elas com uma solução de iodo.</Paragraph>
                        <Paragraph>Com as garrafas devidamente limpas e sanitizadas, vamos enchê-las lentamente até aproximadamente 2 dedos do gargalo. Para diminuir uma possível aeração da cerveja durante o envase, incline um pouco a garrafa de uma forma que o líquido escorra pela lateral e vá até o fundo da garrafa.</Paragraph>
                        <Paragraph>Em seguida, coloque a tampinha devidamente sanitizada sobre a garrafa e, com auxílio do colocador de tampinhas, lacre-a bem.</Paragraph>
                        <Paragraph>Para a sanitização da tampinha, antes de colocá-la na garrafa borrife um pouco de álcool 70% sobre ela e em seguida sacuda um pouco para tirar o excesso.</Paragraph>

                        <Title id={this.createIdFromTitle('Armazenamento das garrafas')} level={4}>Armazenamento das garrafas durante a refermentação</Title>
                        <Paragraph>Após o envase, armazene suas garrafas em pé num ambiente fresco e sem luz, a uma temperatura próxima ao limite da de fermentação, por um período de aproximadamente 15 dias.</Paragraph>
                        <Paragraph>Lembrando que dependendo do estilo e do tempo de maturação, o período de carbonatação pode variar um pouco, pois a refermentação seguirá as mesmas fases da fermentação mas num período um pouco menor.</Paragraph>
                        <Paragraph>Caso esteja muito ansioso para ver seus resultados você poderá experimentar uma garrafa teste semana após o envase, porém é bem provável que a refermentação ainda não esteja completa.</Paragraph>

                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('http://www.condadodacerveja.com.br/wp-content/uploads/2015/06/caipira-condado-da-cerveja.jpg', 'Uma Saison do Condado da Cerveja =)')}
                            </Col>
                        </Row>

                        Texto retirado de: http://www.condadodacerveja.com.br/como-fazer-o-envase-da-cerveja-artesanal/?utm_source=maisumgole&utm_medium=rss
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
