import React, { Component, Fragment } from 'react';
import * as firebase from "firebase";
import { BrowserRouter, Link, Route, Switch as RouterSwitch } from "react-router-dom";

// Style
import "./App.css";

// Components and Routes
import Dashboard from "./Components/Dashboard/Dashboard";
import Navigation from "./Components/Navigation/Navigation";
import CreateTask from "./Components/CreateTask/CreateTask";
import Settings from "./Components/Settings/Settings";
import Profiles from "./Components/Profiles/Profiles";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

// Get data
import { tasks } from "./tasks-data";

class App extends Component {
state = {

}

  tasks;

  writeTaskData(
    id,
    category,
    note,
    assigned,
    pet,
    day,
    time,
    repeat,
    completedTask
  ) {
    const database = firebase.database().ref();
    const tasksRef = database.child("tasks");

    tasksRef.on("value", snap => {
      const newTasks = snap.val();
      this.setState({
        tasks: newTasks
      });
    });

    firebase
      .database()
      .ref("tasks/" + id)
      .set({
        id: id,
        category: category,
        note: note,
        assigned: assigned,
        pet: pet,
        day: day,
        time: time,
        repeat: repeat,
        completedTask: completedTask
      });
  }

  // componentDidMount(){
  //   const database = firebase.database().ref();
  //   const tasksRef = database.child('tasks');

  //   tasksRef.on('value', snap => {
  //     console.log('SNAP VALUE' + snap.val);
  //     this.setState({
  //       tasks: snap.val()
  //     });
  //   });
  // }

  // Method: create new task and add to state
  createTaskHandler = event => {
    event.preventDefault();
    const form = event.target;
    const timestamp = Date.now();

    const task = {
      id: "task-" + timestamp,
      category: form.type.value,
      //alt: '',
      note: form.note.value,
      assigned: form.assigned.value,
      pet: form.pet.value,
      day: form.day.value,
      time: form.time.value,
      repeat: form.repeat.value,
      completedTask: false
    };

    // this.writeTaskData(task.id, task.category, task.note, task.assigned, task.pet, task.day, task.time, task.repeat, task.completedTask);

    tasks.push(task);
    this.setState({ tasks: tasks });

    localStorage.setItem("task", JSON.stringify(task));

    form.reset();
  };

  addNewProfile = event => {
    event.preventDefault();
    console.log("Clicked Pack Member Button");
  };

  render() {
    const toggleComponent = event => {
      let element = event.target;
      console.log(element);

      element.classList.add("nav-clicked");
      setTimeout(() => {
        element.classList.remove("nav-clicked");
      }, 310);
    };

    ///    RETURN    ///

    return (
      <BrowserRouter>
        <Fragment>
        <Header />
          <RouterSwitch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/dashboard" components={Dashboard} />
            <Route path="/createtask" component={CreateTask} />
            <Route path="/settings" component={Settings} />
          </RouterSwitch>

          
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
