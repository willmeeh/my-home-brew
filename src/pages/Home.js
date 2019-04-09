import React, { Component } from 'react';

import { Row, Col, Layout, Card, Divider } from 'antd';
import { Typography } from 'antd';

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
                            src="http://localhost:3000/ceva.mp4"
                        />
                    </Col>
                </Row>
                <Row>
                    <Divider>
                        <Title level={1} style={{ textAlign: 'center', marginTop: '10px' }} >Conheça os copos</Title>
                    </Divider>
                </Row>
                <Row gutter={16}>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <Col md={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src="https://www.meucopo.com/wp-content/uploads/2018/04/81051-1-340x420.jpg" />}
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
                                cover={<img alt="example" src="https://www.meucopo.com/wp-content/uploads/2018/04/80020-340x420.jpg" />}
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
                                cover={<img alt="example" src="https://www.meucopo.com/wp-content/uploads/2018/04/80180-340x420.jpg" />}
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
                                cover={<img alt="example" src="https://www.meucopo.com/wp-content/uploads/2018/04/80070-3-340x420.jpg" />}
                            >
                                <Meta
                                    title="Copo Cerveja Cristal Wheat beer"
                                    description="Copo Cerveja Cristal Wheat beer"
                                />
                            </Card>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Divider>
                        <Title level={1} style={{ textAlign: 'center', marginTop: '10px' }} >Conheça as variedades mais populares</Title>
                    </Divider>
                </Row>
                <Row>
                    <Content>
                        
                    </Content>
                </Row>
            </Content>
        );
    }
}

export default Home;
