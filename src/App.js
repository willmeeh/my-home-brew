import React, { Component } from 'react'
import MyHomeBrewMenu from './components/Menu';
import MyHomeBrewFooter from './components/Footer';
import Router from './Router';
class App extends Component {
  render() {
    return (
      <div>
        <MyHomeBrewMenu />
        <div style={{ marginTop: '3em' }}>
          <Router />
        </div>
        <MyHomeBrewFooter />
      </div>
    );
  }
}

export default App;
