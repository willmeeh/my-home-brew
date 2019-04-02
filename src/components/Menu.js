import React, { Component } from 'react';
import {
  Container,
  Menu,
  Dropdown
} from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom";
class MyHomeBrewMenu extends Component {

    itemIsActive(route) {
        const { pathname } = this.props.location;
        return route === pathname;
    }

    subMenuIsActive(route) {
        const { pathname } = this.props.location;
        return pathname.includes(route);
    }

    createItem(baseComponent, text, route) {
        const { Item } = baseComponent;
        return (
            <Item 
                as={Link} 
                to={route}
                active={this.itemIsActive(route)}
            >
                {text}
            </Item>
        );
    }

    render() {
        const { fixed } = this.props

        return (
            <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                size='large'
            >
                <Container>
                    {this.createItem(Menu, 'Início','/')}
                    <Dropdown 
                        className={this.subMenuIsActive('curiosidades') ? 'active item' : ''}
                        text='Curiosidades' 
                        item 
                    >
                        <Dropdown.Menu>
                            {this.createItem(Dropdown, 'Diferença entre Lager e Ale','/curiosidades/diferenca-lager-ale')}
                            {this.createItem(Dropdown, 'Principais Estilos Lager','/curiosidades/estilos-lager')}
                            {this.createItem(Dropdown, 'Principais Estilos Ales','/curiosidades/estilos-ale')}
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

export default withRouter(MyHomeBrewMenu);
