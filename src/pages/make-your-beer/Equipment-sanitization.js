import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Typography, Anchor, Layout, Card, Col, Row } from 'antd';

const { Title, Paragraph } = Typography;
const { Link: AnchorLink } = Anchor;
const { Content, Sider } = Layout;
const { Meta } = Card;

class EquipmentSanitization extends Component {

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
        return (
            <Fragment>
                <Card
                    style={{ width: 240 }}
                    cover={<img alt={description} src={src} />}
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
        ]

        return (
            <Fragment>
                <Layout className="page-layout" >
                    <Content className="page-content" style={{ padding: '5vh 20vh'}}>
                        <Title id={1} level={3}>Sanitização: Você não pode errar na sua cerveja</Title>
                        <Paragraph>Existem diversas etapas importantes no processo completo de fabricação da cerveja artesanal, mas aquela etapa em que não se pode errar de jeito nenhum é a higienização, ou seja, temos que caprichar na limpeza, sanitização e esterilização, afinal um dos principais motivos de perda de produção sem dúvidas é a contaminação, que nada mais é do que o resultado de falhas na higienização.</Paragraph>
                        <Paragraph>Apesar de todo cervejeiro saber da importância da limpeza correta e minuciosa dos equipamentos e do local antes, durante e após iniciar a produção, é comum encontrar cervejeiros iniciantes que não estão muito familiarizados com os termos citados e não sabem que existe diferença entre eles. Então vamos esclarecer essa diferença.</Paragraph>
                        <Paragraph>
                            <b>LIMPAR:</b> Remover toda a sujeira, resíduos orgânicos e inorgânicos visíveis.<br/>
                            <b>SANITIZAR:</b> Reduzir os microorganismos a níveis insignificantes.<br/>
                            <b>ESTERILIZAR:</b> Exterminar todas as formas de vida, especialmente microrganismos, seja por meios físicos ou químicos.
                        </Paragraph>
                        <Title id={1} level={4}>LIMPEZA</Title>
                        <Paragraph>Limpar é o primeiro passo fundamental para higienização da sua produção, sendo imprescindível fazê-la antes da sanitização, pois, apesar dos agentes sanitizantes serem capazes de limpar, depósitos de resíduos podem abrigar e proteger os microrganismos da ação destes agentes. Portanto é muito importante uma boa limpeza dos equipamentos antes da sanitização.</Paragraph>
                        <Paragraph>Na limpeza são utilizados normalmente água, detergente e esponjas/escovas para remover a sujeira e resíduos depositados nos cantos, buracos e fendas. Seja cuidadoso ao usar utensílios abrasivos (lado áspero das esponjas por exemplo) na limpeza de equipamentos plásticos, pois eles tendem a deixar ranhuras no plástico, que são locais preferidos para hospedar microrganismos indesejados. Na vidraria e panelas esse cuidado não é essencial, sendo aceitável a utilização de agentes abrasivos durante a limpeza destes equipamentos. Todos equipamentos usados na produção devem passar por essa etapa, mesmo aqueles da etapa quente (até o fim da fervura).</Paragraph>

                        <Title id={1} level={4}>SANITIZAÇÃO</Title>
                        <Paragraph>Estando seus equipamentos limpos, é importante que você sanitize tudo que vai tocar o mosto após a fervura (etapa fria do processo). Portanto é essencial que você faça a sanitização do chinoy, do chiller de imersão (se esse for o método de resfriamento escolhido), fermentadores, do airlock, garrafas, etc.</Paragraph>
                        <Paragraph>Existem dois métodos de sanitizar seu equipamento: através de produtos químicos e aquecimento. O método do aquecimento depende tipo de material a ser sanitizado, pois, obviamente, alguns deles não são resistentes ao calor (airlock por exemplo). Muitos produtos químicos podem ser utilizados na sanitização. Vou apresentar alguns dos mais utilizados:</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('https://i1.wp.com/concerveja.com.br/wp-content/uploads/2016/03/cloro2-1.jpg?resize=300%2C300&ssl=1', 'Cloro')}
                            </Col>
                        </Row>
                        <Paragraph>O cloro é um método de baixo custo e de fácil acesso, ele é muito utilizado por quem está começando pois possuí grande poder em acabar com restos de matéria orgânica além de ser um ótimo bactericida. Uma de suas principais desvantagens é que pode ser absorvido pelo plástico, resultando em off flavors na sua cerveja. Outra desvantagem é que ele agrega um “processo extra” às etapas de fabricação, uma vez que necessita enxágue vigoroso.</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('https://i1.wp.com/concerveja.com.br/wp-content/uploads/2016/03/alcool-70-5Lt-1.png?resize=156%2C300&ssl=1', ' Álcool 70 %')}
                            </Col>
                        </Row>
                        <Paragraph>Normalmente utilizado para limpeza de equipamento menores e também nas mãos. Por evapora rapidamente, é necessário apenas aplicar na superfície e aguardar alguns instantes para completa evaporação. Embora seja muito fácil de se encontrar o custo benefício não é muito atraente, pois seu consumo é muito alto para a produção de cerveja.</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('https://i0.wp.com/concerveja.com.br/wp-content/uploads/2016/03/peracetico-1.jpg?resize=300%2C169&ssl=1', 'Ácido Peracético')}
                            </Col>
                        </Row>
                        <Paragraph>O ácido peracético é um ácido extremamente potente, e por se tratar de um componente extremamente corrosivo requer cuidados e atenção durante seu manuseio. Este ácido é muito usado na indústria alimentícia e tem sido incorporado por alguns cervejeiros.</Paragraph>
                        <Paragraph>Uma das vantagens do seu uso é que ele não requer enxágue após sua aplicação, pode ser utilizado em diferentes materiais como: vidro, plástico, aço inox sem prejuízos (não é recomendável utilizá-lo em alumínio) e uma vez diluída a solução ela pode ser reutilizada por alguns dias.</Paragraph>
                        <Paragraph>É encontrado facilmente em lojas especializadas no ramo cervejeiro. É importante sempre se ater é a concentração final do princípio ativo, pois a diluição vai depender da concentração do produto escolhido.</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('https://i1.wp.com/concerveja.com.br/wp-content/uploads/2016/03/iodophor-1.png?resize=300%2C300&ssl=1', 'Iodophor')}
                            </Col>
                        </Row>

                        <Paragraph>Muito utilizado por cervejeiros caseiros e também muito utilizado na indústria alimentícia, ele possui sua ação mais rápida se comparado ao ácido peracético e não necessita de enxágue após sua utilização se dosado de maneira correta.</Paragraph>
                        <Paragraph>Como desvantagem ele pode manchar no equipamento de plástico se utilizado de forma incorreta (por exemplo se ficar em contato por muito tempo).</Paragraph>

                        <Title id={1} level={4}>ESTERILIZAÇÃO</Title>
                        <Paragraph>O processo mais agressivo é a esterilização, pois a proposta é acabar com todos os microrganismos presentes naquele equipamento. Muitos cervejeiros falam em esterilizar seus equipamentos quando na verdade estão falando em sanitizá-los, pois a esterilização normalmente é realizada através do uso de autoclave ou aquecimento a altas temperaturas, não sendo muito realista no contexto de cervejeiro caseiro.</Paragraph>
                        <Paragraph>John Palmer afirma que “a maioria dos produtos químicos que os cervejeiros caseiros usam, vão limpar e sanitizar os equipamentos, mas não esterilizar. Entretanto ao invés de focar na esterilização, que não é realmente necessária, os cervejeiros caseiros podem ficar satisfeitos se conseguirem uma redução consistente dos microrganismos a patamares insignificantes. </Paragraph>

                        Texto Retirado de: https://concerveja.com.br/sanitizacao/

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

export default withRouter(EquipmentSanitization);
