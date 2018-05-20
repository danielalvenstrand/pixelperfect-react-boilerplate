import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Routes from './App.routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="App">
          <Routes />
        </main>
      </Router>
    );
  }
}

export default App;
