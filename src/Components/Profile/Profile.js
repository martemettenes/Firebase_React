import React from 'react';
import './Profile.css';


function Profile(props){
    return (
        <div id="profile-info" className="profile-info">
            <div className="profile-img">
                <img src={require("../../img/012-pet.svg")} alt="Profile profile"/>
            </div>
            <div className="profile-info-section">
                <h1 className="profile-name"> {props.name} </h1>
                <p className="profile-dob">{props.dob} </p>
                <p className="profile-breed"> {props.breed} </p>
                <p className="profile-gender"> {props.gender} </p>
            </div>
        </div>
        );
    }

export default Profile;