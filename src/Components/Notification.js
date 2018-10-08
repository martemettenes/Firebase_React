import React from 'react';
import './css/Notification.css';

function Notification(props){
    return (
    <div id="notification" className="notification">
        <p className="notification-category"> {props.category} </p>
        <p className="notification-time"> {props.time} </p>
        <p className="notification-assigned"> {props.assigned} </p>
        <div className="button-container">
            <button className="notification-btn-edit">
                <img className="icon-img" src={require("../img/019-design.svg")} alt="Tools, Settings Icon"/>
            </button>
            <button className="notification-btn-delete">
                <img className="icon-img" src={require("../img/018-delete.svg")} alt="Trash can, Delete Button Icon"/>
            </button>
            <button className="notification-btn-complete">
                <img className="icon-img" src={require("../img/017-tick.svg")} alt="Check, complete button Icon"/>
            </button>
        </div>
    </div>
        );
    }

export default Notification;