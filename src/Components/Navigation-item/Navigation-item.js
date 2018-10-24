import React from 'react';
import './Navigation-item.css';


const NavigationItem = (props) => {
    return (
        <li id={props.name} className="nav-menu-item"  onClick={props.toggleComponent} >
            <img src={props.src} alt={props.alt}/>
        </li>
    );
}

export default NavigationItem;


