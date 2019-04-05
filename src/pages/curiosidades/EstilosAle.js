import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Glass from "../../components/Glass";
import { Anchor } from 'antd';
import { Typography } from 'antd';
import { Row, Col } from 'antd';

const { Title, Paragraph } = Typography;
const { Link: AnchorLink } = Anchor;

class EstilosAle extends Component {
    // Fonte: http://www.cervejasdomundo.com/Ale.htm

    criarEstilos(estilos) {
        return estilos.map((estilo, index) => {
            const domId = 'anchor' + index;
            const containerStyle = {
                alignItems: 'center',
                marginBottom: '3em'
            }
            return (
                <Row id={domId} type="flex" style={containerStyle}>
                    <Col span={5}>
                        <Glass 
                            corEspuma={estilo.corEspuma}
                            corLiquido={estilo.corLiquido}
                            abv={estilo.abv}
                            ibu={estilo.ibu}
                        />
                    </Col>
                    <Col span={19}>
                        <Row>
                            <Col span={24}>
                                <Title level={4}>{estilo.titulo}</Title>
                                {estilo.paragrafos.map((paragrafo, index) => <Paragraph key={index}>{paragrafo}</Paragraph>)}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )
        });
    }

    render() {
        const estilos = [
            {
                titulo: 'Indian Pale Ale',
                paragrafos: [
                    'Feita para sobreviver às longas viagens entre a Inglaterra e a Índia, as India Pale Ale têm uma forte componenete de lúpulo, essencial para conservar a cerveja durante o máximo de tempo que se conseguisse. Curiosamente, os exemplares americanos conseguem ter um sabor e aroma ainda mais pronunciados a lúpulo, fruto do gosto dos consumidores desse país. A cor das cervejas deste estilo varia entre o amarelo dourado e o acobreado, sendo que o sabor é bastante intenso e refrescante, indicadas portanto para refeições condimentadas como chili e vindaloo. Infelizmente, o termo IPA é cada vez mais utilizado indiscriminadamente, sendo possível encontrar versões com menos de 4% ABV, algo que não se coaduna com a história deste estilo. Diferenciam-se das English Pale Ale e das Bitters por terem um sabor final com mais lúpulo e menos caramelo e frutos.'
                ],
                corLiquido: '#CC3D01',
                corEspuma: '#F7E7D8',
                abv: '4.5-7.0',
                ibu: '40-100'
            },
            {
                titulo: 'Baltic Porter',
                paragrafos: [
                    'Durante o século XVIII, as Porters eram bem mais fortes do que o são hoje em dia, sendo que facilmente ultrapassavam os 7% de volume de álcool. Muitas cervejeiras inglesas faziam mesmo produtos mais fortes destinados à exportação, tendo como principal mercado os países em redor do Mar Báltico. Estas cervejas eram derivadas das Porter inglesas mas tinham também algumas influências das Russian Imperial Stouts, pelo que por vezes podem ser identificadas como Imperial Porters. É um estilo muito complexo,especialmente o sabor, com presença de chocolate e malte torrado, elaborado com lúpulo continental e malte de Viena ou de Munique. Apesar de tudo, é uma cerveja não muito pesada devido a uma boa presença de gás.'
                ],
                corLiquido: '#0C0C0E',
                corEspuma: '#A18F68',
                abv: '7+',
                ibu: '20 - 60'
            },
            {
                titulo: 'Amber Lager',
                paragrafos: [
                    'Sendo esta uma designação muito genérica, as Amber Ale podem variar desde produtos sem grande interesse e caramelizados, a cervejas como uma boa quantidade e balanço entre malte e lúpulo. Habitualmente, a diferença entre uma Amber Ale de qualidade e uma Ameriacan Pale reside no facto da primeira poder ter um carácter mais escuro devido ao malte utilizado, tendo em contrapartida menos lúpulo.'
                ],
                corLiquido: '#F26A38',
                corEspuma: '#FDF6E9',
                abv: '4.5 - 7.0',
                ibu: '20 - 60'
            },
        ];

        return (
            <Row>
                <Col span={24}>
                    <Title style={{ textAlign: 'center' }}>Principais estilos ale</Title>
                </Col>
                <Col span={20}>
                    {this.criarEstilos(estilos)}
                </Col>
                <Col span={4} style={{ padding: '20px' }}>
                    <Anchor showInkInFixed={false} offsetTop={64}>
                        {estilos.map((estilo, index) => (
                            <AnchorLink href={'#anchor' + index} title={estilo.titulo} />
                        ))}
                    </Anchor>    
                </Col>
            </Row>
        );
    }
}

export default withRouter(EstilosAle);
