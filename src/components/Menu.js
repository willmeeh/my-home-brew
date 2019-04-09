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
                {this.createItem('Início','/my-home-brew')}
                {this.createItem('Estilos BJCP 2015', '/my-home-brew/bjcp-styles-2015')}
                <SubMenu title={'Curiosidades'}>
                    {this.createItem('Diferença entre Lagers e Ales', '/my-home-brew/curiosidades/diferenca-lager-ale')}
                    {this.createItem('Tipos de copos para cada estilo', '/my-home-brew')}
                </SubMenu>
                <SubMenu title={'Fazendo a sua cerveja'}>
                    {this.createItem('1. Equipamentos', '/my-home-brew/make-your-beer/equipments')}
                    {this.createItem('2. Ingredientes', '/my-home-brew')}
                    {this.createItem('3. Moagem do malte', '/my-home-brew')}
                    {this.createItem('4. Mosturação', '/my-home-brew')}
                    {this.createItem('5. Sanitização dos equipamentos', '/my-home-brew')}
                    {this.createItem('6. Fermetação', '/my-home-brew')}
                    {this.createItem('7. Envase', '/my-home-brew')}
                </SubMenu>
                <SubMenu title={'Processos e cálculos cervejeiros'}>
                    {this.createItem('Priming', '/my-home-brew')}
                    {this.createItem('Cálculos da água', '/my-home-brew')}
                    {this.createItem('Temperaturas de Mosturação', '/my-home-brew')}
                    {this.createItem('Dry Hopping', '/my-home-brew')}
                </SubMenu>
            </Menu>
        );
    }
}

export default withRouter(MyHomeBrewMenu);
