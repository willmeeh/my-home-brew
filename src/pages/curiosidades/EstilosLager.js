import React, { Component } from 'react';
import {
    Container,
    Header,
    Image,
    Grid,
    Sticky,
    Rail,
    Segment
  } from 'semantic-ui-react'

class Home extends Component {
    render() {
        return (
            <Segment>
                <Container text style={{ marginTop: '7em' }}>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <Header as='h3'>Lagers</Header>
                            <Header as='h4'>São as cervejas de baixa fermentação.</Header>
                            <p>
                                Na sua grande maioria são estilos de cervejas mais leves e claras,
                                mas também temos dentro dessa família uma grande variedade de cores,
                                aromas, potência de corpo e complexidade. Algums exemplos de estilos da família Lager:
                            </p>
                            <Header as='h4'>Pilsen</Header>
                            <p>
                                Estilo de cervejas douradas, brilhantes, quem apresentam leve amargor.
                                Estilo original da cidade de Pilsen na Rep. Tcheca. Exemplo:
                                Wäls Bohemian Pils (Belo Horizonte, MG)
                            </p>
                            <Header as='h4'>Schwarzbier</Header>
                            <p>
                                Estilo de cervejas escuras feitas a partir de maltes torrados.
                                Possui aromas estonteantes de torrefação, que lembram chocolate,
                                café e cacau. Apresenta baixo para médio corpo e de paladar seco ao final.
                                Exemplo: Eisenbahn Dunkel (Blumenau, SC)
                            </p>
                            <Header as='h4'>Bock</Header>
                            <p>
                                Estilo de cervejas em sua maioria avermelhadas, mas temos as versões claras
                                (Heller Bock) e também escuras (Dunkler Bock). Apresentam aromas maltados,
                                médio corpo e teor alcoólico superior a 6,3%. Exemplo: Bierbaum Bock (Treze Tílias, SC)
                            </p>
                            <Header as='h3'>Ales</Header>
                            <Header as='h4'>São as cervejas de alta fermentação.</Header>
                            <p>
                                Geralmente possuem maior corpo e de paladar frutado.
                                Mas os seus gostos e aromas são os mais variados.
                                Alguns exemplos de estios da família Ale:
                            </p>
                            <Header as='h4'>Weizenbier ou Weissbier</Header>
                            <p>
                                Cervejas de trigo típicas Bavária, região mais ao sul da alemanha.
                                Na sua grande maioria são não filtradas, mas também existem as versões
                                filtradas e também a versão bock (Weizenbock) desse estilo. Exemplo:
                                Colorado Appia (Ribeirão Preto, SP)
                            </p>
                            <Header as='h4'>Stout</Header>
                            <p>
                                Estilo de cerveja típico do Reino Unido e Irlanda, a marca mais conhecido
                                é a irlandesa Guinness. Apresenta aromas e sabores de torrefação,
                                e dependendo da variante do estilo (Dry Stout, Foreign Extra Stout,
                                Oatmeal Stout, American Stout, Russian Imperial Stout) ela pode ter baixo ou alto corpo.
                                Exemplo: Bierland Imperial Stout (Blumenau, SC)
                            </p>
                            <Header as='h4'>Dubbel</Header>
                            <p>
                                Estilo típico belga, de coloração marrom, desperta aromas frutados,
                                médio e corpo e equilibrado sabor. Exemplo: Wäls Dubbel (Belo Horizente, MG)
                            </p>
                            <Header as='h2'>Tipos de copos</Header>
                            <p>
                                Parece frescura e você pode até não acreditar,
                                mas o tipo do copo influi consideravelmente
                                nos prazeres degustativos que você pode obter de uma cerveja.
                            </p>

                        </Grid.Column>
                        <Grid.Column>
                            <Rail position='right'>
                                <Sticky active={true} >
                                    <Header as='h3'>Stuck Content</Header>
                                </Sticky>
                            </Rail>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default Home;
