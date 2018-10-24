import React from 'react';
import './Profile.css';


const Profile = (props) => {
    return (
        <div id="profile-info" className="profile-info">
            <div className="profile-img">
                <img src={require("../../img/pet.svg")} alt="Profile profile"/>
            </div>
            <div className="profile-info-section">
                <h2 className="profile-name"> {props.name} </h2>
                <p className="profile-dob">{props.dob} </p>
                <p className="profile-breed"> {props.breed} </p>
                <p className="profile-gender"> {props.gender} </p>
                <p className="profile-ster"> {props.ster} </p>
            </div>
        </div>
        );
    }

export default Profile;