import React, { Component} from 'react';
import './Profiles.css';
// Components
import Profile from '../Profile/Profile';
import PetInfo from '../PetInfo/PetInfo';
// Import data
import { petsProfiles } from '../../profiles-data';

class Profiles extends Component {
    state = {
        petsProfiles: [...petsProfiles],
    }

    render() {

    let profiles = null;

    // Create Profile Component with petsProfiles data
    if (this.state.petsProfiles.length >= 1){
        profiles = (
        <>
            {this.state.petsProfiles.map((petsProfiles) => {
                return (
                    <Profile
                    key={petsProfiles.name}
                    name={petsProfiles.name}
                    dob={petsProfiles.dob}
                    breed={petsProfiles.breed}
                    gender={petsProfiles.gender}
                    ster={petsProfiles.ster}
                    chip={petsProfiles.chip}
                    country={petsProfiles.country}
                    kennel={petsProfiles.kennel}
                    owner={petsProfiles.owner}
                    illness={petsProfiles.illness}
                    note={petsProfiles.note}  />
                )
            })}
        </>
        )
    }

    return (
        <div id="profiles-component" className="profiles">
            <h1> Flokken  </h1>
            {profiles}
            <button onClick={this.props.click}> Lag Nytt flokkmedlem </button>
        </div>
        )

    }
}


export default Profiles;
