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
            }
        ]

        return (
            <Fragment>
                <Layout className="page-layout" >
                    <Content className="page-content" style={{ padding: '5vh 20vh'}}>
                        <Title id={1} level={3}>Fermetação</Title>
                        <Paragraph>Muitos se preocupam excessivamente com a brassagem – não que não seja importante – mas acabam negligenciam o processo de fermentação. Talvez por ser um processo que não dependa de nossa intervenção, exceto pela inoculação do fermento, ou por ser realmente misterioso no começo.</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('http://www.condadodacerveja.com.br/wp-content/uploads/2014/01/fermentacao.jpg', 'Balde fermentando cerveja')}
                            </Col>
                        </Row>
                        <Paragraph>A fermentação tem um papel essencial na produção da cerveja artesanal, pois é nesta etapa que as leveduras transformam o líquido adocicado que produzimos na tão desejada cerveja. E aprender como tudo isso funciona é de extrema importância para a produção de ótimas cervejas.</Paragraph>
                        <Paragraph>Durante a fermentação, as leveduras irão consumir os açúcares fermentáveis do mosto gerando o álcool e o CO2, os aromas e sabores, e também a redução o pH da cerveja.</Paragraph>
                        <Paragraph>O tempo e a temperatura de fermentação podem variar de acordo com a densidade inicial do mosto, o tipo de levedura utilizado e as características que você busca na cerveja.</Paragraph>
                        <Title id={1} level={3}>O que leva a uma boa fermentação?</Title>
                        <Paragraph>
                            Basicamente três fatores são determinantes para uma boa fermentação:<br/>
                            <ul>
                                <li>A quantidade e viabilidade da levedura utilizada;</li>
                                <li>A aeração e os nutrientes dissolvidos no mosto;</li>
                                <li>E o Controle da Temperatura de fermentação.</li>
                            </ul>
                        </Paragraph>
                        <Title id={1} level={4}>Quantidade e viabilidade da levedura utilizada</Title>
                        <Paragraph>É fundamental para se evitar alguns problemas, pois uma inoculação insuficiente poderá causar o atraso do início da fermentação e a formação de subprodutos indesejáveis, além de deixar o mosto por mais tempo propício ao desenvolvimento de bactérias e leveduras selvagens enquanto as leveduras inoculadas se multiplicam.</Paragraph>
                        <Title id={1} level={4}>Aeração e nutrientes dissolvidos no mosto</Title>
                        <Paragraph>Se você estiver fazendo uma cerveja puro malte não precisa se preocupar tanto com os nutrientes, pois a cevada maltada já dispõe de todos os nutrientes necessários. Porém, se utilizar uma boa quantidade de adjuntos (arroz, milho, trigo, cevada não maltada e açúcar refinado) é imprescindível a adição de nutrientes ao mosto – o que em muitos casos é feito durante a fervura – para auxiliar as leveduras na sua fase de adaptação.</Paragraph>
                        <Title id={1} level={4}>Temperatura de fermentação</Title>
                        <Paragraph>O controle da temperatura de fermentação é um dos fatores determinantes para a produção de uma boa cerveja pois as leveduras são diretamente afetadas pela temperatura à que são expostas. Assim, uma temperatura abaixo da faixa mínima de trabalho da levedura faz com que ela adormeça, e uma temperatura muito alta contribui para a produção de compostos indesejáveis difíceis de serem removidos, tais como a formação excessiva de ésteres frutados, a produção de alcoóis e do “fusel”, sendo que esse último remete, por exemplo, sabores de solvente à cerveja.</Paragraph>
                        <Paragraph>A inoculação do fermento em temperaturas altas, acima de 25C, acelera a produção de diacetil tornando difícil sua absorção pelas leveduras no final da fermentação.</Paragraph>
                        <Paragraph>Vale ressaltar que durante a fermentação primária a temperatura dentro do fermentador será maior que a temperatura externa devido à fermentação também ser um processo exotérmico. Assim, investir numa geladeira – pode ser uma velhinha mesmo – e em um termostato é tão importante quanto investir em bons insumos.</Paragraph>

                        <Title id={1} level={3}>As fases da fermentação</Title>
                        <Paragraph>Uma vez que a fermentação é um processo um tanto quanto complicado, é importante conhecê-la para dominá-la. Se realmente fosse simplesmente como resumimos, conversão de açúcares em álcool e CO2,poderíamos abrir uma cerveja agora e relaxar. Mas, como não se resume apenas a esta parte, acho melhor você abrir uma breja e ler mais um pouco…</Paragraph>
                        <Paragraph>Basicamente a fermentação se completa com a conclusão de três fases: Adaptativa (I), Crescimento (II) e Estacionária (III). A levedura precisa terminar a primeira fase para passar para a segunda, mas não precisa terminar a segunda para começar a terceira, percorrendo as fases II e III concomitantemente.</Paragraph>

                        <Title id={1} level={4}>Fase Adaptativa ou Lag Time</Title>
                        <Paragraph>Esta fase se inicia após a inoculação da levedura e pode demorar até 15 horas para ser concluída. Nesta fase ocorre a adaptação das leveduras às condições do mosto e a absorção do oxigênio, minerais e aminoácidos para a sintetização de proteínas.</Paragraph>
                        <Paragraph>A inoculação de uma quantidade adequada de leveduras saudáveis é determinante para reduzir esse tempo de adaptação e multiplicação das leveduras, proporcionando o início mais rápido da fermentação.</Paragraph>
                        <Paragraph>Nesta fase não será notada nenhuma atividade visível da fermentação, mas tenha em mente que esta é uma das fases determinantes para a formação de novas células de leveduras saudáveis que cumprirão com êxito o processo de fermentação.</Paragraph>
                        <Title id={1} level={4}>Fase de Crescimento e Fermentação</Title>
                        <Paragraph>É nesta fase que realmente ocorre a conversão dos açúcares fermentáveis do mosto em álcool e CO2, atenuando a maior parte da gravidade original do mosto (cerca de 2/3).</Paragraph>
                        <Paragraph>O tempo necessário para a fermentação primária pode ser influenciado por diferentes aspectos, tais como: cepa inoculada, temperatura e oxigenação. Mas,via de regra, pode durar entre 2 a 6 dias para Ales e 4 a 10 dias para Lagers.</Paragraph>
                        <Paragraph>Não se assuste! Durante a fermentação primária será formada uma espuma (chamada de krausen) composta por leveduras e proteínas do mosto. Observa-se também alguns pontos de coloração esverdeada formados por resinas do lúpulo, leveduras mortas e algumas proteínas do mosto, que posteriormente se fixarão na parede do fermentador. Conforme a fermentação primária vai se tornando menos vigorosa, o Krausen começa a diminuir.</Paragraph>
                        <Paragraph>É nesta fase também que notamos a maior atividade no airlock.</Paragraph>
                        <Title id={1} level={4}>Fase Estacionária ou Fermentação Secundária</Title>
                        <Paragraph>Nesta fase as leveduras já cumpriram uma boa parte do seu trabalho, porém a cerveja ainda está “verde”. Muitos compostos gerados durante a fermentação ainda estão presentes sendo estes reabsorvidos pela levedura justamente nesta fase.</Paragraph>
                        <Paragraph>A melhor forma de conduzir esta fase é observar a diminuição e estabilização da atenuação da densidade original. Quando isso ocorrer, comece a aumentar a temperatura do fermentador numa proporção de 1 grau por dia, até atingir a faixa mais alta de temperatura da levedura utilizada. Mantenha nesta temperatura por aproximadamente 2 dias. Esse procedimento irá acelerar o processo de “limpeza” do mosto.</Paragraph>

                        Texto retirado de: http://www.condadodacerveja.com.br/aprenda-sobre-o-processo-de-fermentacao/?utm_source=rss&utm_medium=rss
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
