import React from "react";
import { Link } from "react-router-dom";

import "./Navigation-item.css";

const NavigationItem = props => {
  return (
    <li id={props.name} className="nav-menu-item">
      <button className="nav-menu-item-button">
        <Link className="nav-menu-item-button-link" to={props.path}>
          <img src={props.src} alt={props.alt} />
        </Link>
      </button>
    </li>
  );
};

export default NavigationItem;
