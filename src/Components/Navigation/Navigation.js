import React from 'react';
import './Navigation.css';

//Get components
import NavigationItem from '../Navigation-item/Navigation-item.js';


const Navigation = () => {
    return (
        <nav id="navigation" className="navigation" >
            <ul className="navigation-menu">

                <NavigationItem
                name="home"
                src={require("../../img/doghouse.svg")}
                alt="Dog house, home icon"
                path="/home" />

                <NavigationItem
                name="tasks"
                src={require("../../img/list.svg")}
                alt="Dog house, home icon"
                path="/dashboard" />

                <NavigationItem
                name="createTask"
                src={require("../../img/add.svg")}
                alt="Bell, create task icon"
                path="/createtask"/>
 
                <NavigationItem
                name="pack"
                src={require("../../img/pet.svg")}
                alt="Dog house, home icon"
                path="/profiles" />

                <NavigationItem
                name="settings"
                src={require("../../img/tools.svg")}
                alt="Dog house, home icon"
                path="/settings" /> 

            </ul>
        </nav>
    );
}

export default Navigation;