import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import DiferencaEntreLagerAle from './pages/curiosidades/DiferencaEntreLagerAle';
import EstilosLager from './pages/curiosidades/EstilosLager';
import EstilosAle from './pages/curiosidades/EstilosAle';

function MyHomeBrewRouter() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/curiosidades/diferenca-lager-ale" component={DiferencaEntreLagerAle} />
        <Route exact path="/curiosidades/estilos-lager" component={EstilosLager} />
        <Route exact path="/curiosidades/estilos-ale" component={EstilosAle} />
    </Switch>
  );
}

export default MyHomeBrewRouter;
