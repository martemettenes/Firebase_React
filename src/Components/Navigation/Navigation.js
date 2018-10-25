import React from 'react';
import './Navigation.css';
//Get components
import NavigationItem from '../Navigation-item/Navigation-item.js';


const Navigation = (props) => {
    return (
        <div id="navigation" className="navigation" >
            <ul className="navigation-menu">

                <NavigationItem
                name="home"
                toggleComponent={props.click}
                src={require("../../img/doghouse.svg")}
                alt="Dog house, home icon" />

                <NavigationItem
                name="tasks"
                toggleComponent={props.click}
                src={require("../../img/list.svg")}
                alt="Dog house, home icon" />

                <NavigationItem
                name="createTask"
                toggleComponent={props.click}
                src={require("../../img/add.svg")}
                alt="Bell, create task icon" />

                <NavigationItem
                name="pack"
                toggleComponent={props.click}
                src={require("../../img/pet.svg")}
                alt="Dog house, home icon" />

                <NavigationItem
                name="settings"
                toggleComponent={props.click}
                src={require("../../img/tools.svg")}
                alt="Dog house, home icon" />

            </ul>
        </div>
    );
}

export default Navigation;


// className={(this.state.isActivePage === 'pack'  ? 'active' : '')}