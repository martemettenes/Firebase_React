import React, { Component} from 'react';

import './Home.css';

class Home extends Component {
    render() {

    return (
        <div id="Home" className="home">
            <img className="dog-icon" src={require("../../img/dog.svg")} alt="Dog" />
        </div>
        )
    }
}


export default Home;
