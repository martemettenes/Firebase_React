import React from 'react';


const Dropdown = (props) => {
  return(
    <select id={props.selectCar} className={props.class} form={props.form} type="text">
        <option value={props.alt1}> {props.alt1} </option>
        <option value={props.alt2}> {props.alt2} </option>
        <option value={props.alt3}> {props.alt3} </option>
    </select>
  )
}

export default Dropdown;