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
      <HomepageLayout></HomepageLayout>
    );
  }
}

export default App;
