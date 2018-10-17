import React, { Component } from 'react';
// Style
import './App.css';
import './Components/Navigation/Navigation.css';
// Components
import Dashboard from './Components/Dashboard/Dashboard';
import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/Profile/Profile';
// Data
import { pets, people, walk, meds, meal, appointments } from './app-data';

class App extends Component {

  render() {

    // Animation to buttons
    const activeBtn = (event) => {
      let element = event.target;
      console.log(event.target);
      element.classList.add('nav-clicked');
      element.classList.toggle('nav-active');

      setTimeout(() => {
        element.classList.remove('nav-clicked');
      }, 200);
  }

      // Complete events
      const completeEvent = (event) => {
        let element = event.target;
        console.log(event.target);
        element.classList.toggle('completed');
    }


    return (
      <div className="App">
        <div className="content">
          <Profile name={pets.mara.name} breed={pets.mara.breed} gender={pets.mara.gender} dob={pets.mara.dob} />
          <Dashboard click={(event) => completeEvent(event)} />
        </div>
        <Navigation change={(event) => activeBtn(event)} />
      </div>
    );
  }
}

export default App;
