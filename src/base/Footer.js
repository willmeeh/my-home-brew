import React from 'react'
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'

const Footer = () => (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
            <Grid divided inverted stackable>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Curiosidades' />
                    <List link inverted>
                        <List.Item as='a'>Estilos de cerveja</List.Item>
                        <List.Item as='a'>Tipos de copos</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Fazendo a sua cerveja' />
                    <List link inverted>
                        <List.Item as='a'>Introduçao</List.Item>
                        <List.Item as='a'>Equipamentos</List.Item>
                        <List.Item as='a'>Ingredientes</List.Item>
                        <List.Item as='a'>Moagem do malte</List.Item>
                        <List.Item as='a'>Mosturação</List.Item>
                        <List.Item as='a'>Sanitização dos equipamentos</List.Item>
                        <List.Item as='a'>Fermetação</List.Item>
                        <List.Item as='a'>Envase</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Processos e cálculos cervejeiros' />
                    <List link inverted>
                        <List.Item as='a'>Priming</List.Item>
                        <List.Item as='a'>Cálculos da água</List.Item>
                        <List.Item as='a'>Temperaturas de Mosturação</List.Item>
                        <List.Item as='a'>Dry Hopping</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Header inverted as='h4' content='Footer Header' />
                    <p>
                        Extra space for a call to action inside the footer that could help re-engage users.
                    </p>
                </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size='mini' src='/logo.png' />
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policys
                </List.Item>
            </List>
        </Container>
    </Segment>
)

export default Footer