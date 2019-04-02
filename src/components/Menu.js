import React, { Component } from 'react';
import {
  Container,
  Menu,
  Dropdown
} from 'semantic-ui-react'
import { Link } from "react-router-dom";
class MyHomeBrewMenu extends Component {

    createLink(text, route) {
        const linkStyle = {
            textDecoration: 'none', 
            color: 'black'
        };

        return (
            <Link style={linkStyle} to={route}>{text}</Link>
        );
    }

    render() {
        const { fixed } = this.props

        return (
            <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                size='large'
            >
                <Container>
                    <Menu.Item>
                        <Link to="/">Início</Link>
                    </Menu.Item>
                    <Dropdown item simple text='Curiosidades'>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                {this.createLink('Diferença entre Lager e Ale', '/curiosidades/diferenca-lager-ale')}
                            </Dropdown.Item>
                            <Dropdown.Item>
                                {this.createLink('Principais estilos Lagers', '/curiosidades/estilos-lager')}
                            </Dropdown.Item>
                            <Dropdown.Item>Principais estilos Ales</Dropdown.Item>
                            <Dropdown.Item>Tipos de copos para cada estilo</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item simple text='Fazendo a sua cerveja'>
                        <Dropdown.Menu>
                            <Dropdown.Item>1. Introduçao</Dropdown.Item>
                            <Dropdown.Item>2. Equipamentos</Dropdown.Item>
                            <Dropdown.Item>3. Ingredientes</Dropdown.Item>
                            <Dropdown.Item>4. Moagem do malte</Dropdown.Item>
                            <Dropdown.Item>5. Mosturação</Dropdown.Item>
                            <Dropdown.Item>6. Sanitização dos equipamentos</Dropdown.Item>
                            <Dropdown.Item>7. Fermetação</Dropdown.Item>
                            <Dropdown.Item>8. Envase</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item simple text='Processos e cálculos cervejeiros'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Priming</Dropdown.Item>
                            <Dropdown.Item>Cálculos da água</Dropdown.Item>
                            <Dropdown.Item>Temperaturas de Mosturação</Dropdown.Item>
                            <Dropdown.Item>Dry Hopping</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Menu>
        );
    }
}

export default MyHomeBrewMenu;
