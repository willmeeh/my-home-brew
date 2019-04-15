import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import BjcpStyles2015 from './pages/BjcpStyles2015';
import Equipments from './pages/make-your-beer/Equipments';
import EquipmentSanitization from './pages/make-your-beer/Equipment-sanitization';
import Fermentation from './pages/make-your-beer/Fermentation';
import FillingProcess from './pages/make-your-beer/Filling-process';
import Ingredients from './pages/make-your-beer/Ingredients';
import Mashing from './pages/make-your-beer/Mashing';
import MillingMalt from './pages/make-your-beer/Milling-malt';

export const ROUTES = [
  { path: '/my-home-brew', name: 'Início', component: Home },
  {
    path: '/my-home-brew/bjcp-styles-2015',
    component: BjcpStyles2015
  },
  {
    path: '/my-home-brew/make-your-beer/equipments',
    component: Equipments
  },
  {
    path: '/my-home-brew/make-your-beer/ingredients',
    component: Ingredients
  },
  {
    path: '/my-home-brew/make-your-beer/milling-malt',
    component: MillingMalt
  },
  {
    path: '/my-home-brew/make-your-beer/mashing',
    component: Mashing
  },
  {
    path: '/my-home-brew/make-your-beer/equipment-sanitization',
    component: EquipmentSanitization
  },
  {
    path: '/my-home-brew/make-your-beer/fermentation',
    component: Fermentation
  },
  {
    path: '/my-home-brew/make-your-beer/filling-process',
    component: FillingProcess
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
