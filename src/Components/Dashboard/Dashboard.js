import React, { Component} from 'react';
import './Dashboard.css';

// Components
import Notification from '../Notification/Notification';
import { tasks } from '../../tasks-data';

class Dashboard extends Component {
    state = {
        tasks: [...tasks],
        completedTask: false
    }


    render() {

    // Icons for checked or unchecked  notifications
    const tick = require("../../img/tick.svg");
    const tickCheck = require("../../img/tick-check.svg");

    // The new variable where we will store the tasks-output(UI) from state.
    let tasksList = null;

    // Create Notification Component with Tasks data
    if (this.state.tasks.length >= 1){
        tasksList = (
        <>
            {this.state.tasks.map((tasks) => {
                return (
                    <Notification
                    key={tasks.id}
                    category={tasks.category}
                    altCategory= {tasks.alt}
                    time="09:00"
                    assigned={tasks.assigned}
                    assignedPet={tasks.pet}

                    completeTask={(event) => completeEvent(event, tasks)}
                    categoryEdit={require("../../img/pencil.svg")}
                    categoryDelete={require("../../img/delete.svg")}
                    categoryComplete={(tasks.completedTask === false) ? tick : tickCheck } />
                )
            })}
        </>
        )
    }


    // Tick off a task
    const completeEvent = (event, object) => {
        if (object.completedTask) {
            let newObject = object;
            newObject.completedTask = false;
            this.setState({object: newObject});

        } else if (!object.completedTask) {
            let newObject = object;
            newObject.completedTask = true;
            this.setState({object: newObject});
        }
    }


    return (
        <div id="dashboard" className="dashboard">
            <h1> Gjøremål </h1>
            {tasksList}
        </div>
        )


    }
}


export default Dashboard;
