import React from 'react';
import './Icon.css';


const Icon = (props) => {
    return(
        <img className="notification-icon" src={props.src} alt={props.alt} />
    )

}


export default Icon;



