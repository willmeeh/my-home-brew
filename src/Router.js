import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import DiferencaEntreLagerAle from './pages/curiosidades/DiferencaEntreLagerAle';
import EstilosLager from './pages/curiosidades/EstilosLager';
import EstilosAle from './pages/curiosidades/EstilosAle';

export const ROUTES = [
  { path: '/', name: 'Início', component: Home },
  { 
    path: '/curiosidades/diferenca-lager-ale', 
    name: 'Início', 
    component: DiferencaEntreLagerAle 
  },
  { 
    path: '/curiosidades/diferenca-lager-ale', 
    name: 'Diferença entre Lagers e Ales', 
    component: DiferencaEntreLagerAle
  },
  { 
    path: '/curiosidades/estilos-lager', 
    name: 'Principais Estilos Lager', 
    component: EstilosLager 
  },
  { 
    path: '/curiosidades/estilos-ale', 
    name: 'Principais Estilos Ale', 
    component: EstilosAle 
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
