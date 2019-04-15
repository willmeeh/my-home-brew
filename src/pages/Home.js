import React, { Component } from 'react';

import { Row, Col, Layout, Card, Divider } from 'antd';
import { Typography, Carousel } from 'antd';

import SublimeVideo from 'react-sublime-video';

const { Meta } = Card;
const { Title } = Typography;


const { Content } = Layout;

// https://youtu.be/SKz05-BE-XE

class Home extends Component {
    render() {
        return (
            <Content>
                <Row>
                    <Col md={24}>
                        <SublimeVideo autoPlay loop
                            src="https://willmeeh.github.io/my-home-brew/ceva.mp4"
                        />
                    </Col>
                </Row>
                <Row>
                    <Divider>
                        <Title level={1} style={{ textAlign: 'center', marginTop: '10px' }} >Conheça os copos</Title>
                    </Divider>
                </Row>
                <Row>
                    <Row>
                        <div style={{ background: '#ECECEC', padding: '30px' }}>
                            <Col md={6}>
                                <Card
                                    hoverable
                                    cover={<img style={{width: 'auto', height: '200px'}}  alt="example" src="https://www.meucopo.com/wp-content/uploads/2018/04/81051-1-340x420.jpg" />}
                                >
                                    <Meta
                                        title="Tulipa de Cristal para Cerveja Reta"
                                        description="Tulipa de Cristal para Cerveja Reta"
                                    />
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card
                                    hoverable
                                    cover={<img style={{width: 'auto', height: '200px'}}  alt="example" src="https://www.meucopo.com/wp-content/uploads/2018/04/80020-340x420.jpg" />}
                                >
                                    <Meta
                                        title="Taça para Cerveja Double Bock"
                                        description="Taça para Cerveja Double Bock"
                                    />
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card
                                    hoverable
                                    cover={<img style={{width: 'auto', height: '200px'}}  alt="example" src="https://www.meucopo.com/wp-content/uploads/2018/04/80180-340x420.jpg" />}
                                >
                                    <Meta
                                        title="Caneca de Chopp Mass Krug M"
                                        description="Caneca de Chopp Mass Krug M"
                                    />
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card
                                    hoverable
                                    cover={<img style={{width: 'auto', height: '200px'}}  alt="example" src="https://www.meucopo.com/wp-content/uploads/2018/04/80070-3-340x420.jpg" />}
                                >
                                    <Meta
                                        title="Copo Cerveja Cristal Wheat beer"
                                        description="Copo Cerveja Cristal Wheat beer"
                                    />
                                </Card>
                            </Col>
                        </div>
                    </Row>
                </Row>
                <Row>
                    <Divider>
                        <Title level={1} style={{ textAlign: 'center', marginTop: '10px' }} >Etapas de produção</Title>
                    </Divider>
                </Row>
                <Row>
                    <Col md={24}>
                        <Carousel autoplay style={{ padding: '10px' }}>
                            <div>
                                <h3>1. MOER O MALTE</h3>
                                <Row type="flex" justify="center" >
                                    <Col md={12}>
                                        <Card hoverable
                                            cover={<img style={{width: 'auto', height: '200px'}} alt="example" src="https://destemperados.clicrbs.com.br/arquivos/ckeditor/CrhTQSXB9mKXbm4WCJ1/54eb991c405b35.79157516.jpg" />}>
                                            <p>
                                                Na maioria das vezes, a cervejaria já compra o malte de cevada (ou de outro cereal, como trigo) pronto. O primeiro passo, então, é moer o ingrediente, processo feito em um moinho. O objetivo é moer a tal ponto que o malte fique descascado, com a parte do amido exposta, para facilitar as próximas etapas da produção. Se resultar em uma mistura muito fina, há risco de entupir os equipamentos.
                                        </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <h3>2. BRASSAGEM OU MOSTURAÇÃO</h3>
                                <Row type="flex" justify="center">
                                    <Col md={12}>
                                        <Card hoverable
                                            cover={<img style={{width: 'auto', height: '200px'}}  alt="example" src="https://destemperados.clicrbs.com.br/arquivos/ckeditor/CrhTQSXB9mKXbm4WCJ1/54eb993a163148.75448326.jpg" />}>
                                            <p>
                                                O malte que foi moído vai para uma tina, onde será misturado com água quente e aquecido. Mais especificamente: vai cozinhar. A temperatura ideal para que as enzimas do malte de cevada sejam ativadas é 65 graus. A partir daí o amido começa a se transformar em açúcar, que vai ser o alimento das leveduras (fermento) nos passos seguintes. Essa fase pode levar de 60 a 90 minutos.
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <h3>3. FILTRAGEM</h3>
                                <Row type="flex" justify="center">
                                    <Col md={12}>
                                        <Card hoverable
                                            cover={<img style={{width: 'auto', height: '200px'}}  alt="example" src="https://destemperados.clicrbs.com.br/arquivos/ckeditor/CrhTQSXB9mKXbm4WCJ1/54eb994e4bac13.57982957.jpg" />}>
                                            <p>
                                                Essa etapa,que leva pelo menos uma hora, é a que vai separar o mosto do bagaço do grão, além das cascas que podem ter escapado  para dentro dos tanques. O mosto é o nome dado para a cerveja antes de ser fermentada. O equipamento que fará a filtragem tem o fundo falso, fazendo com que o mosto circule dentro dele. Assim, as cascas e os grãos que, por acaso,
    estiverem boiando no líquido vão  para o fundo. Se alguma parte sólida passar para as outras etapas de elaboração da cerveja, a bebida pode adquirir sabores indesejados.
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <h3>4. FERVURA</h3>
                                <Row type="flex" justify="center">
                                    <Col md={12}>
                                        <Card hoverable
                                            cover={<img style={{width: 'auto', height: '200px'}}  alt="example" src="https://destemperados.clicrbs.com.br/arquivos/ckeditor/CrhTQSXB9mKXbm4WCJ1/54eb9987980d82.58084542.jpg" />}>
                                            <p>
                                                O bagaço restante é lavado e a água que traz os restos de açúcares é adicionada ao mosto para a fervura. É aqui que ocorre a sanitização do líquido, ou seja, os microorganismos são eliminados. É também a hora de adicionar o lúpulo, que
    dará aroma, sabor e amargor à cerveja.
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <h3>5. RESFRIAMENTO</h3>
                                <Row type="flex" justify="center">
                                    <Col md={12}>
                                        <Card hoverable
                                            cover={<img style={{width: 'auto', height: '200px'}}  alt="example" src="https://destemperados.clicrbs.com.br/arquivos/ckeditor/CrhTQSXB9mKXbm4WCJ1/54eb9987980d82.58084542.jpg" />}>
                                            <p>
                                                O líquido é resfriado a 20 graus, temperatura ideal para que as leveduras façam seu trabalho na hora da fermentação. Como são organismos sensíveis, não podem ser expostos a temperaturas muito altas, para que não morram.
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <h3>6. FERMENTAÇÃO</h3>
                                <Row type="flex" justify="center">
                                    <Col md={12}>
                                        <Card hoverable
                                            cover={<img style={{width: 'auto', height: '200px'}}  alt="example" src="https://destemperados.clicrbs.com.br/arquivos/ckeditor/CrhTQSXB9mKXbm4WCJ1/54eb99a28f5217.20496640.jpg" />}>
                                            <p>
                                                Fermentar o líquido com ajuda das leveduras é a etapa mais demorada do processo, em torno de 10 dias. As Ale (cervejas de alta fermentação) levam menos tempo que as Lager (de baixa fermentação). É nesse momento que o perfil da cerveja pode se diferenciar, com a adição de diferentes culturas de leveduras. Nesse processo, o açúcar vai ser transformado em álcool, ester, fenóis e compostos de aroma e sabor, além de gás carbônico. Para finalizar, o fermento é decantado e recolhido do tanque.
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <h3>7. MATURAÇÃO</h3>
                                <Row type="flex" justify="center">
                                    <Col md={12}>
                                        <Card hoverable
                                            cover={<img style={{width: 'auto', height: '200px'}}  alt="example" src="https://destemperados.clicrbs.com.br/arquivos/ckeditor/CrhTQSXB9mKXbm4WCJ1/54eb99a28f5217.20496640.jpg" />}>
                                            <p>
                                                Quando o fermento é retirado da cerveja, a temperatura do tanque é diminuída e ela passa algum tempo maturando. Essa etapa é importante para que as leveduras atuem mais um pouco na cerveja, gerando um amadurecimento da bebida.
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <h3>8. ENVASE</h3>
                                <Row type="flex" justify="center">
                                    <Col md={12}>
                                        <Card hoverable
                                            cover={<img style={{width: 'auto', height: '200px'}}   alt="example" src="https://publicidadeecerveja.files.wordpress.com/2016/03/linha-de-envase-cerveja-a-outra.jpg" />}>
                                            <p>
                                                Depois de maturada a frio, as cervejas são filtradas e pasteurizadas. Algumas artesanais vão direto para o envase e mantidas em uma câmara fria até o momento de serem repassadas para o mercado. Como são cervejas vivas, o fermento continua atuando, é preciso estar em temperaturas mais baixas para que continuem frescas.
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>


                        </Carousel>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default Home;
