import React from 'react';
import './css/PetInfo.css';


function PetInfo(props){
    return (
        <div id="pet-info" className="pet-info">
            <div className="pet-img">
                <img src={require("../img/012-pet.svg")} alt="Pet profile"/>
            </div>
            <div className="pet-info-section">
                <h1 className="pet-name"> {props.name} </h1>
                <p className="pet-dob">Date of birth: {props.dob} </p>
                <p className="pet-breed"> {props.breed} </p>
                <p className="pet-gender"> {props.gender} </p>
            </div>
        </div>
        );
    }

export default PetInfo;