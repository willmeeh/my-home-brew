import React, { Component } from 'react';
import {
    Container,
    Header,
    Grid,
    Sticky,
    Rail,
    Segment
  } from 'semantic-ui-react'
  import { withRouter } from "react-router-dom";

class EstilosLager extends Component {
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

export default withRouter(EstilosLager);
