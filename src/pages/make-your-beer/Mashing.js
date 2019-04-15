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
                        <Title id={1} level={3}>Brassagem</Title>
                        <Paragraph>Também conhecido como mostura, este processo visa a conversão do amido oriundo do malte em açúcares menores. Há ainda a quebra de proteínas e polipeptídios do malte em menores frações, resultando na qualidade da espuma da cerveja.</Paragraph>
                        <Paragraph>Este processo nada mais é do que o cozimento do malte na água e ele se dá em diversas faixas de temperatura, de acordo com o resultado desejado e os grão usados:</Paragraph>
                        <Title id={1} level={4}>Repouso protéico (50-55ºC)</Title>
                        <Paragraph>Esta etapa é necessária quando trabalhamos com cereais ricos em proteínas, como os maltes de trigo ou aveia, entre outros.</Paragraph>
                        <Paragraph>O objetivo aqui é a quebra de proteínas maiores em menores, e de peptídeos em aminoácidos. Caso não haja estes tipos de grão na receita, podemos seguir para a etapa seguinte.</Paragraph>
                        <Title id={1} level={4}>Sacarificação (55-72ºC)</Title>
                        <Paragraph>Nesta faixa de temperatura, o objetivo é a quebra dos açúcares maiores em menores.</Paragraph>
                        <Paragraph>A configuração final dos açúcares resultantes das quebras inferirá na capacidade de fermentar do mosto, no corpo da cerveja e no teor de álcool. Com mais açúcares fermentáveis teremos uma cerveja com maior conversão de açúcares, com menos corpo e mais álcool.</Paragraph>
                        <Paragraph>Isto porque os açúcares menores são mais facilmente transformados em álcool e CO2 pela levedura.</Paragraph>
                        <Paragraph>Assim, se geramos mais açúcares não fermentáveis, que os fermentos não conseguirão metabolizar, o resultado vai ser uma cerveja com mais corpo, menos álcool e mais doce. Na sacarificação há duas enzimas em atividade:</Paragraph>
                        <Paragraph>
                            <ul>
                                <li><b>Beta-amilase (55-65ºC):</b> Trabalhando mais neste intervalo de temperatura teremos a produção de açúcares fermentáveis. Logo, o resultado final com menos corpo e mais álcool.</li>
                                <li><b>Alfa-amilase (68-72ºC):</b> Aqui há a produção de mais açúcares maiores. Assim, ao usar mais as alfa-amilases, teremos um mosto com maior diversidade de açúcares, muitos não fermentáveis. O resultado é uma cerveja mais doce, mais encorpada e menos alcoólica, pela não fermentação de mais açúcares.</li>
                            </ul>  
                        </Paragraph>
                        <Title id={1} level={3}>Inativação das enzimas (75-79ºC) – Mash Out</Title>
                        <Paragraph>Essa é a fase final da mostura, que tem com o objetivo a parada da atuação enzimática, principalmente. Aqui deve- se ter muito cuidado para que a temperatura da cerveja não ultrapasse os 80 graus, pois assim haverá grande extração de polifenóis, gerando adstringência no sabor final da cerveja.</Paragraph>
                        <Paragraph>Deve-se ter atenção pois sempre que o fogo estiver ligado o mosto deve ser agitado para que os grãos do fundo da panela não queimem.</Paragraph>
                        <Paragraph>O tempo também deverá ser levado em consideração. Quanto melhor o controle de temperatura, menor ele pode ser. Da mesma forma, um mosto mais denso e rico em açucares requer um período maior para a conversão.</Paragraph>
                        <Paragraph>Em média, um tempo utilizado para a brassagem de cerveja caseira é pode variar entre 60-90 minutos.</Paragraph>

                        <Title id={1} level={3}>Lavagem, filtragem e clarificação do mosto.</Title>
                        <Paragraph>O objetivo desta etapa é separar o grão do mosto. Após este processo, os grãos serão descartados.</Paragraph>
                        <Paragraph>O grão, aqui, tem a importante função de atuar como elemento filtrante, impedindo que se leve sedimentos para a fervura, gerando um mosto mais clarificado. É nesta etapa que se utilizará o fundo falso.</Paragraph>
                        <Paragraph>Após o término da brassagem e adequação do equipamento, deve esperar 15 minutos para os grãos de depositarem no fundo e filtrarem melhor.</Paragraph>
                        <Paragraph>Após este tempo, pela torneira o mosto começará a ser retirado, sendo devolvido para a panela até que ele comece a sair sem partículas sólidas. Após isto, ele começará a ser retirado da panela e sendo adicionado a água da lavagem. Esta água irá retirar mais açúcares dos grãos, dando um melhor rendimento.</Paragraph>
                        <Paragraph>Para uma melhor precisão, o ideal é medir a densidade do mosto agora, assim você terá um controle melhor da sua produção. Use o densímetro ou o refratômetro para fazer a medição.</Paragraph>

                        <Title id={1} level={3}>Fervura e lupulagem</Title>
                        <Paragraph>A fervura do mosto tem algumas funções importantes na produção cervejeira, entre elas: esterilização do mosto, concentração do mosto e evaporação de substâncias indesejadas.</Paragraph>
                        <Paragraph>Assim que o mosto ferver, é importante que a panela esteja destampada para a eliminação de substâncias que podem causar sabores e aromas ruins à cerveja, também conhecidos como off-flavours.</Paragraph>
                        <Paragraph>Um desses exemplos é o DMS – Dimetilsulfeto, um composto sulfuroso, que deve evaporar durante a fervura, para que a sua cerveja não fique com aroma de milho cozido ou vegetais cozidos. Está aí a importância de deixar a panela aberta, sem a tampa, durante a fervura!</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('https://www.hominilupulo.com.br/wp-content/uploads/2011/12/fervura.jpg', 'Adição de lúpulo durante a fervura')}
                            </Col>
                        </Row>
                        <Paragraph>É na fervura que iremos temperar a cerveja, ou seja, faremos a adição dos lúpulos.</Paragraph>
                        <Paragraph>Existem os lúpulos de amargor e lúpulos de aroma e a utilização dos lúpulos de amargor é sempre no início da fervura, ou seja, o lúpulo deve ferver no mínimo por 60 minutos para liberar o seu amargor.</Paragraph>
                        <Paragraph>Já para o aroma, os lúpulos devem ser adicionados ao final da fervura, normalmente após os últimos 15 minutos finais. Quanto menor a fervura dos lúpulos, menos sua volatização e maior aroma na cerveja.</Paragraph>
                        <Paragraph>O tempo de fervura deverá ser escolhido considerando fatores como evaporação desejada e caramelização do mosto. Uma fervura muito longa irá gerar um sabor mais caramelado, que pode não ser interessante para determinados estilos.</Paragraph>

                        <Title id={1} level={3}>Medição da densidade</Title>
                        <Paragraph>Esta nesta etapa que descobriremos se nosso processo foi eficiente. Quanto mais açúcares tiverem sido quebrados e extraídos, mais denso será o mosto, logo, melhor terá sido o resultado.</Paragraph>
                        <Paragraph>Para poder fazer alguma correção ao longo do processo, é comum também medir a densidade logo após o fim da brassagem, porém a densidade que será considerada como oficial será a medida após a fervura.</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('https://www.hominilupulo.com.br/wp-content/uploads/2011/12/medir-densidade-cerveja.jpg', 'Medição da densidade com proveta e densímetro')}
                            </Col>
                        </Row>

                        <Title id={1} level={3}>Decantação e resfriamento do mosto</Title>
                        <Paragraph>Após terminar a fervura, o mosto deve ser resfriado o mais breve possível para a temperatura de inoculação do fermento, de acordo com o tipo de fermento usado.</Paragraph>
                        <Paragraph>Neste momento, também é importante que as partículas sólidas decantem. Para isso, faz-se movimentos circulares com a colher, gerando um roda moinho</Paragraph>
                        <Paragraph>Este processo é conhecido como whirlpool. Feito isso, inicia-se o resfriamento.</Paragraph>
                        <Paragraph>Utilizando o chiller, a água trocará temperatura com o mosto. Neste momento, é importante ter muito cuidado para evitar contaminação, cada vez mais possível de acontecer com a diminuição da temperatura.</Paragraph>
                        <Paragraph>Este processo de resfriamento rápido é importante para coagulação de proteínas e polifenóis.</Paragraph>

                        <Title id={1} level={3}>Trasfega para o fermentador</Title>
                        <Paragraph>Após atingir a temperatura indicada para o fermento, o mosto deve ser transferido para o balde fermentador.</Paragraph>
                        <Paragraph>Neste momento, é importante oxigenar o mosto, pois o oxigênio será necessário durante a fermentação. Assim, a própria ação da gravidade gera isto com a queda do mosto da panela para o fermentador.</Paragraph>
                        <Paragraph>O oxigênio é importante para multiplicação celular da levedura.</Paragraph>


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
