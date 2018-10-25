import React, { Component } from 'react';
import './CreateTask.css';
import { meal, meds, walk, appointments } from '../../app-data';


class CreateTask extends Component {

  render () {
  console.log('Create Task - This props tasks' + this.props.tasks)

  return (
    <div className="create-task-form">
      <form className="create-task-form" id="create-task" onSubmit={(e) => this.props.createTask(e)}>

        <h1> Nytt gjøremål </h1>

        <h4> Hva? </h4>
        <p> Hvilket gjøremål? </p>
        <select id="type" name="type" form="create-task" type="text">
          <option value={meal.icon}> Måltid </option>
          <option value={walk.icon}> Tur </option>
          <option value={meds.icon}> Medisin </option>
          <option value={appointments.icon}> Avtale </option>
        </select>

        <p> Hvem gjelder oppgaven? </p>
        <select id="pet" name="pet" form="create-task" type="text">
          <option value="Mara"> Mara </option>
          <option value="Vinnie"> Vinnie </option>
        </select>

        <h4> Når? </h4>
        <p> Hvor ofte?</p>
        <select id="repeat" name="repeat" form="create-task" type="text">
          <option value="true"> Gjentagende </option>
          <option value="false"> Bare denne gangen</option>
        </select>

        <p> Hvilken dag </p>
        <select id="day" name="day" form="create-task" type="text">
          <option value="Monday"> Monday </option>
          <option value="Tuesday"> Tuesday </option>
          <option value="Wednesday"> Wednesday </option>
          <option value="Thursday"> Thursday </option>
          <option value="Friday"> Friday </option>
          <option value="Saturday"> Saturday </option>
          <option value="Sunday"> Sunday </option>
        </select>

        <p> Klokkeslett </p>
        <input id="time" name="time" type="time" placeholder="Text" />

        <p> Dato </p>
        <input id="date" name="date" type="date" placeholder="Text" />

        <h4> Hvem? </h4>
        <p> Hvem skal gjøre oppgaven? </p>
        <select id="assigned" name="assigned" form="create-task" type="text">
          <option value="Marte"> Marte </option>
          <option value="Frida"> Frida </option>
          <option value="Mamma"> Mamma </option>
          <option value="Pappa"> Pappa </option>
          <option value="Steffen"> Steffen </option>
          <option value="Silje"> Silje </option>
        </select>

        <p> Notat </p>
        <textarea id="note" name="note" type="text" placeholder="Notat" />
        <button id="submit" name="submit" className="submit-btn" type="submit" value="Lag oppgave" form="create-task"> Lag oppgave </button>

      </form>
    </div>
  )
}
}


export default CreateTask;
