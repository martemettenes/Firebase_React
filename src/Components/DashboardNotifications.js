import React from 'react';
import './css/DashboardNotifications.css';
import Notification from './Notification';

function DashboardNotifications(props){
    return (
    <div id="dashboard-notifications" className="dashboard-notifications">
        <h3> Notifications </h3>
        <Notification category="Meal" time="09:00" assigned="Marte, Frida"/>
        <Notification category="Walk" time="10:00" assigned="Marte"/>
        <Notification category="Meal" time="16:00" assigned="Frida"/>
        <Notification category="Walk" time="17:00" assigned="Frida"/>
    </div>
        );
    }

export default DashboardNotifications;