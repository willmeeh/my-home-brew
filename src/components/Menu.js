import React, { Component } from 'react';
import { Menu } from 'antd';
import { withRouter, Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
class MyHomeBrewMenu extends Component {

    state = { current: null }
    
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    
    createItem(text, route) {
        return (
            <Menu.Item key={route}>
                {text}
                <Link to={route} />
            </Menu.Item>
        );
    }

    componentDidMount() {
        this.setState({
            current: this.props.location.pathname
        })
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                theme="dark"
                style={{ lineHeight: '64px' }}
            >
                {this.createItem('Início','/')}
                {this.createItem('Estilos BJCP 2015', '/bjcp-styles-2015/')}
                <SubMenu title={'Curiosidades'}>
                    {this.createItem('Diferença entre Lagers e Ales', '/curiosidades/diferenca-lager-ale')}
                    {this.createItem('Tipos de copos para cada estilo', '/')}
                </SubMenu>
                <SubMenu title={'Fazendo a sua cerveja'}>
                    {this.createItem('1. Introduçao', '/')}
                    {this.createItem('2. Equipamentos', '/')}
                    {this.createItem('3. Ingredientes', '/')}
                    {this.createItem('4. Moagem do malte', '/')}
                    {this.createItem('5. Mosturação', '/')}
                    {this.createItem('6. Sanitização dos equipamentos', '/')}
                    {this.createItem('7. Fermetação', '/')}
                    {this.createItem('8. Envase', '/')}
                </SubMenu>
                <SubMenu title={'Processos e cálculos cervejeiros'}>
                    {this.createItem('Priming', '/')}
                    {this.createItem('Cálculos da água', '/')}
                    {this.createItem('Temperaturas de Mosturação', '/')}
                    {this.createItem('Dry Hopping', '/')}
                </SubMenu>
            </Menu>
        );
    }
}

export default withRouter(MyHomeBrewMenu);
