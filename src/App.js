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
// Get data
import { tasks } from './tasks-data';


class App extends Component {
  state = {
    showHome: false,
    showDashboard: true,
    showCreateTask: false,
    showPack: false,
    showSettings: false,
    tasks: [...tasks]
  }


    // Method: create new task and add to state 
    createTaskHandler = ( event ) => {
      event.preventDefault();
      const form = event.target;
  
      const tasks = this.state.tasks;
  
      const timestamp = Date.now();
  
      const task = {
        id: 'task' + timestamp,
        category: form.type.value,
        //alt: '',
        note: form.note.value,
        assigned: form.assigned.value,
        pet: form.pet.value,
        time: form.time.value,
        repeat: form.repeat.value,
        completedTask: false
      }
  
      tasks.push(task)
  
      // Set state
      this.setState({ tasks : tasks });
      console.log('this.state.tasks' + this.state.tasks);
  
      localStorage.setItem('task', JSON.stringify(task));
      console.log(localStorage.getItem('task') );
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
            <Dashboard
              tasks={this.state.tasks}  /> : null }
          {(this.state.showCreateTask === true) ?
            <CreateTask 
              tasks={this.state.tasks}
              createTask={this.createTaskHandler.bind(this)}
            /> : null }
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