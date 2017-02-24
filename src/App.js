import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import logo from '../public/images/WIP-logo-green.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to</h2>
        </div>
        <Jumbotron>
          <h1>Flyleaf.co</h1>
          <p>This is a simple webpage for browsing and tracking all your favorite web comics!</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
