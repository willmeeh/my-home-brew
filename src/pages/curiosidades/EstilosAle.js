import _ from 'lodash'
import React, { Component, createRef, Fragment } from 'react'
import {
  Grid,
  Header,
  Rail,
  Image,
  Ref,
  Segment,
  Sticky,
  Menu,
  Container
} from 'semantic-ui-react'
  import { withRouter } from "react-router-dom";
  import Glass from "../../components/Glass";

class EstilosAle extends Component {
    // Fonte: http://www.cervejasdomundo.com/Ale.htm

    contextRef = createRef()

    criarItemEstilo(estilo, index) {
        return (
            <Fragment key={index}>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Container fluid>
                            <Header as='h2'>{estilo.titulo}</Header>
                            {estilo.paragrafos.map((paragrafo, index) => <p key={index}>{paragrafo}</p>)}
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid centered columns={3}>
                        <Grid.Column verticalAlign='middle'>
                            <Header as='h3'>{estilo.ibu}</Header>
                            <Header as='h3'>IBUS</Header>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Header as='h3'>{estilo.abv}</Header>
                            <Header as='h3'>ABVS</Header>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Glass 
                                corEspuma={estilo.corEspuma}
                                corLiquido={estilo.corLiquido}
                            />
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Fragment>
        );
    }

    criarEstilos(estilos) {
        return estilos.map((estilo, index) => this.criarItemEstilo(estilo, index));
    }
    handleRef = (node) => {
        this.functionalRef = node
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
                abv: '4.5 - 7.0',
                ibu: '40 - 100'
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
            {
                titulo: 'Amber Lager',
                paragrafos: [
                    'Sendo esta uma designação muito genérica, as Amber Ale podem variar desde produtos sem grande interesse e caramelizados, a cervejas como uma boa quantidade e balanço entre malte e lúpulo. Habitualmente, a diferença entre uma Amber Ale de qualidade e uma Ameriacan Pale reside no facto da primeira poder ter um carácter mais escuro devido ao malte utilizado, tendo em contrapartida menos lúpulo.'
                ],
                corLiquido: '#F26A38',
                corEspuma: '#FDF6E9',
                abv: '4.5 - 7.0',
                ibu: '20 - 60'
            }
        ];

        return (
            <Segment>
                <Header as='h3'>Estilos</Header>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Ref innerRef={this.contextRef}>
                            <Segment>
                                {console.log('this.contextRef', this.contextRef)}
                                <Grid>
                                    {this.criarEstilos(estilos)}
                                </Grid>

                                <Rail position='left'>
                                    <Sticky context={this.contextRef} offset={50}>
                                        <Menu pointing secondary vertical>
                                            {estilos.map((estilo, index) => (
                                                <Menu.Item key={index} name={estilo.titulo} />    
                                            ))}
                                        </Menu>
                                    </Sticky>
                                </Rail>
                            </Segment>
                        </Ref>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default withRouter(EstilosAle);
