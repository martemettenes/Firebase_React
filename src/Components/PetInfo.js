import React from 'react';
import './css/PetInfo.css';


function PetInfo(props){
    return (
        <div id="pet-info" className="pet-info">
            <img className="pet-img" alt={props.alt} ></img>
            <div className="pet-info-section">
                <h1 className="pet-name"> {props.name} </h1>
                <p className="pet-dob"> {props.dob} </p>
                <p className="pet-gender"> {props.gender} </p>
                <p className="pet-breed"> {props.breed} </p>
            </div>
        </div>
        );
    }

export default PetInfo;