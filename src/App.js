import React, { Component } from 'react';
// Style
import './App.css';
import './Components/Navigation/Navigation.css';
// Components
import Dashboard from './Components/Dashboard/Dashboard';
import Navigation from './Components/Navigation/Navigation';
import CreateTask from './Components/CreateTask/CreateTask';
import Settings from './Components/Settings/Settings';
import Profiles from './Components/Profiles/Profiles';
import Home from './Components/Home/Home';

localStorage.setItem('key', 'yuuge value');

console.log( localStorage.getItem('key') );

class App extends Component {
  // State is only available in components that extends a class.
  state = {
    showHome: false,
    showDashboard: false,
    showCreateTask: true,
    showPack: false,
    showSettings: false
  }

  render() {

    const toggleComponent = (event) => {
      let element = event.target;
      console.log(element);

      element.classList.add('nav-clicked');
          setTimeout(() => {
            element.classList.remove('nav-clicked');
          }, 310);

      switch(element.id) {

        case 'home':
          this.setState({showHome: true, showDashboard: false, showCreateTask: false, showPack: false, showSettings: false})
          break;
  
        case 'tasks':
          this.setState({showHome: false, showDashboard: true, showCreateTask: false, showPack: false, showSettings: false})
          break;

        case 'createTask':
          this.setState({showHome: false, showDashboard: false, showCreateTask: true, showPack: false, showSettings: false})
          break;

        case 'pack':
          this.setState({showHome: false, showDashboard: false, showCreateTask: false, showPack: true, showSettings: false})
          break;

        case 'settings':
          this.setState({showHome: false, showDashboard: false, showCreateTask: false, showPack: false, showSettings: true})
          break;

        default:
          this.setState({showHome: true, showDashboard: false, showCreateTask: false, showPack: false, showSettings: false})
      }
    }

/// Return ///

return (
      <div className="App">

        <div className="content">
          {(this.state.showHome === true) ? 
            <Home  /> : null }
          {(this.state.showDashboard === true) ? 
            <Dashboard  /> : null }
          {(this.state.showCreateTask === true) ?
            <CreateTask /> : null }
          {(this.state.showSettings === true) ?
            <Settings title="Instillinger" /> : null }
            {(this.state.showPack === true) ?
            <Profiles /> : null }
        </div>

        <Navigation click={(event) => toggleComponent(event)} />

      </div>
    );

    
  }
}

export default App;