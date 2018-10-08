import React from 'react';
import './css/Notification.css';

function Notification(props){
    return (
    <div id="notification" className="notification">
        <p className="notification-category"> {props.category} </p>
        <p className="notification-time"> {props.time} </p>
        <p className="notification-assigned"> {props.assigned} </p>
        <div className="button-container">
            <button className="notification-btn-edit"> Edit </button>
            <button className="notification-btn-delete"> Del </button>
            <button className="notification-btn-complete"> Done </button>
        </div>
    </div>
        );
    }

export default Notification;