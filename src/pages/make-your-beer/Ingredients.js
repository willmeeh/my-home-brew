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
            { 'title': 'INGREDIENTES DA CERVEJA' },
            { 'title': 'MALTE' },
            { 'title': 'LÚPULO' },
            { 'title': 'LEVEDURA' },
        ]

        return (
            <Fragment>
                <Layout className="page-layout" >
                    <Content className="page-content" style={{ padding: '2vh 10vh' }}>
                        <Title id={this.createIdFromTitle('INGREDIENTES DA CERVEJA')} level={3}>INGREDIENTES DA CERVEJA</Title>
                        <Paragraph>A cerveja é feita por quatro ingredientes básicos: água, malte, lúpulo e levedura. É claro que outros ingredientes podem ser adicionados à receita, dependendo do estilo da cerveja, mas são esses quatro ingredientes que definem a base do nosso líquido sagrado.</Paragraph>
                        <Paragraph>A água é mais de 90% da cerveja. A água utilizada no processo de produção deve ser de boa qualidade, filtrada e sem cloro, mas apesar do que alguns mitos propagam, ela não precisa vir de uma fonte nobre para que a cerveja tenha qualidade. Hoje em dia é possível filtrar e ajustar a água de acordo com a cerveja que se deseja produzir. Esqueça aquela história da água de Agudos, da fonte da Serra ou da geleira polar... Hoje em dia isso é um mito.</Paragraph>
                        <Paragraph>Para as produções caseiras, a água não é a maior das preocupações. É claro que é preciso buscar uma água filtrada, sem cloro e também com um Ph possível para a produção - por aqui procuramos ir em busca de uma água com o ph entre 5,2 e 5,5. Para a produção de alguns estilos, enriquecer a água com sais pode ajudar a chegar em um resultado mais alinhado com os guias de estilos. Mas isso já um papo mais avançado para quando entrarmos em detalhes sobre cada ingrediente.</Paragraph>
                        <Title id={this.createIdFromTitle('MALTE')} level={3}>MALTE</Title>
                        O malte é o grão de cevada que passou por um processo controlado de umidificação, germinou e teve esse etapa interrompida por secagem. Isso é necessário para que o grão transforme o amido em seu interior, produza e ative as enzimas necessárias para produzir cerveja. Além disso, o malte seco é mais estável e favorece o armazenamento.
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('https://3.bp.blogspot.com/-GNefEhrytNM/WRRbLvfWRfI/AAAAAAAAZVk/KMnZ5b7pI3AjDZ9BUSej6loh8hrjLLfwwCLcB/s1600/malte.jpg', 'Malte com grão inteiro')}
                            </Col>
                        </Row>
                        <Paragraph>Durante o processo de torra do grão serão definidos os aromas e sabores do malte. O malte vai dar cor, corpo, aroma e sabor à cerveja, além do alimento necessário para que a levedura trabalhe e produza o gás e álcool da cerveja. Chocolate, café, defumado, biscoito, caramelo, pão branco... Há uma infinidade de nuances sensoriais que o malte pode oferecer tanto ao aroma quanto ao paladar.</Paragraph>
                        <Paragraph>Dependendo do estilo, a cerveja pode levar também maltes de outros grãos como trigo, centeio e aveia. Além do malte, adjuntos não-malteados podem ser utilizados como arroz, milho, cevada torrada, flocos de aveia... Tudo vai depender da receita escolhida para a sua cerveja!</Paragraph>
                        <Title id='por-que-cevada' level={4}><i>Por que cevada?</i></Title>
                        <Paragraph>A cevada é um grão riquíssimo em amido e enzimas que favorecem a produção da cerveja. Ela possui baixo teor de gordura, uma boa relação de proteínas e suas cascas funcionam como escudos durante o processo de mostura e são filtrantes naturais - formam uma verdadeira "caminha" na panela que ajuda na filtragem do mosto.</Paragraph>

                        <Title id={this.createIdFromTitle('LÚPULO')} level={3}>LÚPULO</Title>
                        <Paragraph>A alma da cerveja. Essa plantinha é responsável pelo aroma e amargor da cerveja. O lúpulo é uma planta trepadeira que pode chegar a 8 metros de altura. Seu nome científico é Humulus Lupulus e apenas as flores femininas da planta podem ser utilizadas na produção de cerveja - elas são ricas em lupulina, uma substância resinosa essencial para os aromas e amargor da cerveja.</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('https://3.bp.blogspot.com/-3HTyAlx4D8s/WRRaSUxkpEI/AAAAAAAAZVM/2lXaFzoHjXUPX5G3MljA3Z49stw_pAVFwCLcB/s1600/lupulo.jpg', 'Lúpulo recém colhido')}
                            </Col>
                        </Row>
                        <Paragraph>O lúpulo também funciona como proteção para cerveja, ele é bacteriostático e possui ainda substâncias que vão impactar em uma boa formação de espuma.</Paragraph>
                        <Paragraph>Existem diferentes tipos de lúpulo e eles são classificados como lúpulos aromáticos, lúpulos de amargor ou lúpulos híbridos, que apresentam essas características em equilíbrio. Os lúpulos de amargor possuem alto teor de alfa-ácidos e serão utilizados no início da fervura para conferir o perfil do amargor da cerveja. Os lúpulos aromáticos são ricos em óleos essenciais e são adicionados mais ao fim da fervura.</Paragraph>
                        <Paragraph><b>Melão, pêra, manga, maracujá, flores, ervas, terra, grama...</b> Há um buquê de aromas e sabores possíveis dependendo do tipo de lúpulo utilizado. Nos sites para compra de ingredientes, as características de cada um dos lúpulos são especificadas para que você possa atingir o melhor resultado.</Paragraph>
                        <Title id={1} level={4}><i>O lúpulo é primo da maconha</i></Title>
                        <Paragraph>O lúpulo possui uma prima controversa. Ele pertence à família das Cannabinaceae, a mesma da maconha. Ele tem ainda propriedades medicinais sendo uma erva relaxante, diurética e anafrodisíaca.</Paragraph>
                        <Title id={1} level={4}><i>Dry Hopping</i></Title>
                        <Paragraph>O lúpulo pode ser adicionado em alguns processos frios de produção de cerveja em uma espécie de hop bag - semelhante a uma infusão de chá. Isso favorece a liberação de óleos essenciais que potencializa os aromas da cerveja.</Paragraph>

                        <Title id={this.createIdFromTitle('LEVEDURA')} level={3}>LEVEDURA</Title>
                        <Paragraph>Esses microorganismos vivos são responsáveis por toda a magia! Alguns cervejeiros afirmam que não fazem cerveja, apenas preparam o ambiente para que a levedura trabalhe. E é mais ou menos isso o que acontece. Após todo o processo de produção, a levedura é adicionada a baldes fermentadores e vai consumir o açúcar disponível para transformar em gás carbônico e álcool. Além disso, contribuem com alguns perfis do aroma, graças aos ésteres que produzem. Abençoados funguinhos!</Paragraph>
                        <Row gutter={16}>
                            <Col span={16}>
                                {this.renderImage('https://2.bp.blogspot.com/-uuoxxToW-o4/WRRaSRBRx2I/AAAAAAAAZVg/jV5tmaapBNUGUXvbv4p6h41JWuvYCakeQCEw/s1600/levedura.png', 'Levedura vista através de um microscópio')}
                            </Col>
                        </Row>
                        <Paragraph>Existem dois tipos principais de leveduras: as leveduras de alta fermentação (Saccharomyces Cerevisiae) que vão produzir as <b>cervejas Ale</b> e as leveduras de baixa fermentação (Saccharomyces Calbergensis) que vão produzir as <b>cervejas Lager</b>. Existem ainda as leveduras selvagens (Brettanomyces, Saccharomyces Bayanus, Saccharomyces Cariocus entre outras) que serão responsáveis pelas <b>cervejas de fermentação espontânea</b> como as Lambic, mas em geral não são desejadas em uma produção, sendo agentes contaminantes.</Paragraph>

                        Retirado de: https://www.mariacevada.com.br/2017/05/quais-sao-os-ingredientes-da-cerveja-como-fazer-cerveja.html

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
