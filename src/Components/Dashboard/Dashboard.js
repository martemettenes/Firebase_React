import React, { Component} from 'react';
import './Dashboard.css';

// Components
import Notification from '../Notification/Notification';

class Dashboard extends Component {
    state = {
        completedTask: false
    }

    render() {

    // Icons for checked or unchecked  notifications
    const tick = require("../../img/tick.svg");
    const tickCheck = require("../../img/tick-check.svg");

    // The new variable where we will store the tasks-output(UI) from state.
    let tasksList = null;
    let tasksListReoccuring = null;
    let tasksListThursday = null;
    
    // Create Notification Component with Tasks data
    if (this.props.tasks.length >= 1){
        console.log('once');
        tasksList = (
        <>
            {this.props.tasks.map((tasks) => {
                if (tasks.day === "today") {
                return (
                    <Notification
                    key={tasks.id}
                    category={tasks.category}
                    altCategory= {tasks.alt}
                    time={tasks.time}
                    assigned={tasks.assigned}
                    assignedPet={tasks.pet}

                    completeTask={(event) => completeEvent(event, tasks)}
                    deleteTask ={(event) => deleteEvent(event, tasks)}
                    categoryEdit={require("../../img/pencil.svg")}
                    categoryDelete={require("../../img/delete.svg")}
                    categoryComplete={(tasks.completedTask === false) ? tick : tickCheck } />
                )
            } else {
                return (null)
            }
            })}
        </>
        )
        console.log(this.props.tasks.length);
    }

    // Place reoccuring notifications under "Hver dag"
    if (this.props.tasks.length >= 1){
        console.log('reoccuring');
        tasksListReoccuring = (
        <>
            {this.props.tasks.map((tasks) => {
                if (tasks.repeat === "true") {
                return (
                    <Notification
                    key={tasks.id}
                    category={tasks.category}
                    altCategory= {tasks.alt}
                    time={tasks.time}
                    assigned={tasks.assigned}
                    assignedPet={tasks.pet}

                    completeTask={(event) => completeEvent(event, tasks)}
                    deleteTask ={(event) => deleteEvent(event, tasks)}
                    categoryEdit={require("../../img/pencil.svg")}
                    categoryDelete={require("../../img/delete.svg")}
                    categoryComplete={(tasks.completedTask === false) ? tick : tickCheck } />
                )
            } else {
                return (null)
            }
            })}
        </>
        )
        console.log(this.props.tasks.length);
    }

    if (this.props.tasks.length >= 1){
        console.log('Thursday');
        tasksListThursday = (
        <>
            {this.props.tasks.map((tasks) => {
                if (tasks.day === "thursday") {
                return (
                    <Notification
                    key={tasks.id}
                    category={tasks.category}
                    altCategory= {tasks.alt}
                    time={tasks.time}
                    assigned={tasks.assigned}
                    assignedPet={tasks.pet}

                    completeTask={(event) => completeEvent(event, tasks)}
                    deleteTask ={(event) => deleteEvent(event, tasks)}
                    categoryEdit={require("../../img/pencil.svg")}
                    categoryDelete={require("../../img/delete.svg")}
                    categoryComplete={(tasks.completedTask === false) ? tick : tickCheck } />
                )
            } else {
                return (null)
            }
            })}
        </>
        )
        console.log(this.props.tasks.length);
    }


    // Tick off a task
    const completeEvent = (event, object) => {
        console.log('the object is: ' + object.id)

        if (object.completedTask === true) {
            
            let newObject = object;
            newObject.completedTask = false;
            this.setState({object: newObject});

        } else if (object.completedTask === false) {

            let newObject = object;
            newObject.completedTask = true;
            this.setState({object: newObject});

        }
    }

    // Delete task from list
    const deleteEvent = (event, object) => {
        const allTasks = this.props.tasks;

        for (let i = 0; i < allTasks.length; i++){
            if (allTasks[i].id === object.id){
                allTasks.splice(i, 1);
                break;
            }
        }
        this.setState({tasks: allTasks});
    }



    return (
        <div id="dashboard" className="dashboard">
            <h1> Gjøremål </h1>
            <p> Idag</p>
            {tasksList}
            <p> Hver dag</p>
            {tasksListReoccuring}
            <p> Torsdag </p>
            {tasksListThursday}
        </div>
        )


    }
}


export default Dashboard;
