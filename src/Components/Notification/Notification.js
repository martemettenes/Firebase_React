import React from 'react';
import './Notification.css';
import Icon from '../Icon/Icon';


const Notification = (props) => {
    return (
    <div className="notification">
        <p className="notification-category">
        <Icon className={props.classNameCategory} src={props.category} alt={props.altCategory} />
        </p>
        <p className="notification-time"> {props.time} </p>
        <p className="notification-assigned"> {props.assigned} </p>
        <p className="notification-assigned"> {props.assignedPet} </p>
        <div className="button-container">
            <button className="notification-btn-edit" onClick={props.editTask}>
                <Icon className={props.classNameEdit} src={props.categoryEdit} alt={props.altEdit} />
            </button>
            <button className="notification-btn-delete" onClick={props.deleteTask}>
                <Icon className={props.classNameDelete} src={props.categoryDelete} alt={props.altDelete} />
            </button>
            <button className="notification-btn-complete" onClick={props.completeTask}>
                <Icon className={props.classNameComplete} src={props.categoryComplete} alt={props.altComplete} />
            </button>
        </div>
    </div>
        );
    }


export default Notification;