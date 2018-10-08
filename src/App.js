import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Navigation from './Components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Dashboard/>
        </div>
        <Navigation/>
      </div>
    );
  }
}

export default App;
