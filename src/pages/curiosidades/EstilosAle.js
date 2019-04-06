import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Layout, Typography, Anchor } from 'antd';

import { createStylesDescription } from 'components/BeerStyleDescription'

const { Content, Sider } = Layout;
const { Title } = Typography;
const { Link: AnchorLink } = Anchor;

class EstilosAle extends Component {
    render() {
        let styles = [
            {
                styleName: 'Indian Pale Ale',
                descriptions: [
                    'Feita para sobreviver às longas viagens entre a Inglaterra e a Índia, as India Pale Ale têm uma forte componenete de lúpulo, essencial para conservar a cerveja durante o máximo de tempo que se conseguisse. Curiosamente, os exemplares americanos conseguem ter um sabor e aroma ainda mais pronunciados a lúpulo, fruto do gosto dos consumidores desse país. A cor das cervejas deste estilo varia entre o amarelo dourado e o acobreado, sendo que o sabor é bastante intenso e refrescante, indicadas portanto para refeições condimentadas como chili e vindaloo. Infelizmente, o termo IPA é cada vez mais utilizado indiscriminadamente, sendo possível encontrar versões com menos de 4% ABV, algo que não se coaduna com a história deste estilo. Diferenciam-se das English Pale Ale e das Bitters por terem um sabor final com mais lúpulo e menos caramelo e frutos.'
                ],
                liquidColor: '#CC3D01',
                foamColor: '#F7E7D8',
                abv: '4.5-7.0',
                ibu: '40-100'
            },
            {
                styleName: 'Baltic Porter',
                descriptions: [
                    'Durante o século XVIII, as Porters eram bem mais fortes do que o são hoje em dia, sendo que facilmente ultrapassavam os 7% de volume de álcool. Muitas cervejeiras inglesas faziam mesmo produtos mais fortes destinados à exportação, tendo como principal mercado os países em redor do Mar Báltico. Estas cervejas eram derivadas das Porter inglesas mas tinham também algumas influências das Russian Imperial Stouts, pelo que por vezes podem ser identificadas como Imperial Porters. É um estilo muito complexo,especialmente o sabor, com presença de chocolate e malte torrado, elaborado com lúpulo continental e malte de Viena ou de Munique. Apesar de tudo, é uma cerveja não muito pesada devido a uma boa presença de gás.'
                ],
                liquidColor: '#0C0C0E',
                foamColor: '#A18F68',
                abv: '7+',
                ibu: '20 - 60'
            },
            {
                styleName: 'Amber Lager',
                descriptions: [
                    'Sendo esta uma designação muito genérica, as Amber Ale podem variar desde produtos sem grande interesse e caramelizados, a cervejas como uma boa quantidade e balanço entre malte e lúpulo. Habitualmente, a diferença entre uma Amber Ale de qualidade e uma Ameriacan Pale reside no facto da primeira poder ter um carácter mais escuro devido ao malte utilizado, tendo em contrapartida menos lúpulo.'
                ],
                liquidColor: '#F26A38',
                foamColor: '#FDF6E9',
                abv: '4.5 - 7.0',
                ibu: '20 - 60'
            },
        ];

        styles = [ ...styles, ...styles, ...styles ]

        return (
            <Fragment>
                <Title className="text-center">Principais estilos ale</Title>
                <Layout className="page-layout">
                    <Content className="page-content">
                        {createStylesDescription(styles)}
                    </Content>
                    <Sider width={200} className="page-sider">
                        <Anchor offsetTop={64}>
                            {styles.map((estilo, index) => (
                                <AnchorLink 
                                    key={index}
                                    href={'#anchor' + index} 
                                    title={estilo.styleName} 
                                />
                            ))}
                        </Anchor>
                    </Sider>
                </Layout>
            </Fragment>
        );
    }
}

export default withRouter(EstilosAle);
