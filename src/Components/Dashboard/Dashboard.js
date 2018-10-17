import React from 'react';
import './Dashboard.css';
import Notification from '../Notification/Notification';
import { pets, people, walk, meds, meal, appointments } from '../../app-data';


const Dashboard = (props) => {
    return (
    <div id="dashboard" className="dashboard">
        <h3> Notifications </h3>
        <Notification category={meal.icon} time="09:00" assigned="Marte, Frida" click={props.click}/>
        <Notification category={walk.icon} time="10:00" assigned="Marte" click={props.click}/>
        <Notification category={meal.icon}  time="16:00" assigned="Frida" click={props.click}/>
        <Notification category={walk.icon} time="17:00" assigned="Frida" click={props.click}/>
    </div>
    )
}

export default Dashboard;
