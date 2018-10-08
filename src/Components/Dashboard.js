import React from 'react';
import './css/Dashboard.css';
import PetInfo from './PetInfo';
import DashboardNotifications from './DashboardNotifications';

function Dashboard(){
    return (
    <div className="dashboard">
        <PetInfo name="Mara" breed="Podenco" gender="female" dob="24.07.2004"/>
        <DashboardNotifications/>
    </div>
        );
    }

export default Dashboard;