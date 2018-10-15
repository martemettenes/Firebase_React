import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Navigation from './Components/Navigation';
import './Components/css/Navigation.css';

class App extends Component {

  activeBtn = () => {
    document.querySelector('#navigation').classList.add('nav-color');
    console.log();
    setTimeout(() => {
      document.querySelector('#navigation').classList.remove('nav-color');
    }, 250);
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <Dashboard/>
        </div>
        <Navigation clickHandler={this.activeBtn} />
      </div>
    );
  }
}

export default App;
