import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from 'pages/Home';
import DiferencaEntreLagerAle from 'pages/curiosidades/DiferencaEntreLagerAle';
import BjcpStyles2015 from 'pages/BjcpStyles2015';

export const ROUTES = [
  { path: '/my-home-brew', name: 'Início', component: Home },
  { 
    path: '/my-home-brew/curiosidades/diferenca-lager-ale', 
    name: 'Início', 
    component: DiferencaEntreLagerAle 
  },
  { 
    path: '/my-home-brew/curiosidades/diferenca-lager-ale', 
    name: 'Diferença entre Lagers e Ales', 
    component: DiferencaEntreLagerAle
  },
  { 
    path: '/my-home-brew/bjcp-styles-2015', 
    name: 'Estilos BJCP 2015', 
    component: BjcpStyles2015 
  },
];

class MyHomeBrewRouter extends Component {
  createRoutes(routes) {
    return routes.map(({path, component}, index) => (
      <Route key={"route" + index} exact path={path} component={component} />
    ));
  }

  render() {
    return (
      <Switch>
        {/* @TODO: Criação de rotas provisórias, utilizar (https://reacttraining.com/react-router/web/example/route-config) ?  */}
        {this.createRoutes(ROUTES)}
    </Switch>
    );
  }
}

export default MyHomeBrewRouter;
