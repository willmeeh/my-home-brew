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

class EstilosAle extends Component {
    render() {
        return (
            <Segment>
                <Container text style={{ marginTop: '7em' }}>
                    <Grid centered columns={2}>
                        <Grid.Column>
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

export default withRouter(EstilosAle);
