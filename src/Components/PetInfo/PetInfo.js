import React from 'react';
import './PetInfo.css';
// Components
import Profile from '../Profile/Profile';


const PetInfo = (props) => {
    return (
        <div id="pet-info" className="pet-info">

            <Profile
                key={props.name}
                name={props.name}
                dob={props.dob}
                breed={props.breed}
                gender={props.gender}
                ster={props.ster}  />

            <div className="info-section">
                <h4> Opprinnelse</h4>
                <p className="p-title half"> Opprinnelsesland </p>
                <p className="p-info half"> {props.country} </p>
                <p className="p-title half"> Chip nummer </p>
                <p className="p-info half"> {props.chip}</p>
                <p className="p-title half"> Stamtavle/Reg.navn </p>
                <p className="p-info half"> - </p>
                <p className="p-title half"> Kennel </p>
                <p className="p-info half"> {props.kennel} </p>
            </div>

            <div className="info-section">
                <h4> Situasjon </h4>
                <p className="p-title half"> Eiere </p>
                <p className="p-info half"> {props.owner} </p>
                <p className="p-title full"> Sykdommer </p>
                <p className="p-info full"> {props.illness} </p>
                <p className="p-title full"> Notat </p>
                <p className="p-info full"> {props.note} masse tekst her om mara og alt mulig masse tekst her om mara og alt mulig  masse tekst her om mara og alt mulig masse tekst her om mara og alt mulig masse tekst her om mara og alt mulig  masse tekst her om mara og alt mulig  </p>
            </div>

        </div>
        )

}



export default PetInfo;