import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomepageLayout from './HomepageLayout';
import Curiosidades from './pages/Curiosidades'
import FazendoCerveja from './pages/FazendoCerveja'
import ProcessoCalculoServejeiros from './pages/ProcessoCalculoServejeiros'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomepageLayout} />
        <Route path="/Curiosidades" component={Curiosidades} />
        <Route path="/Fazendo-a-sua-cerveja" component={FazendoCerveja} />
        <Route path="/Processos-e-calculos-cervejeiros" component={ProcessoCalculoServejeiros} />
      </Switch>
    );
  }
}

export default App;
