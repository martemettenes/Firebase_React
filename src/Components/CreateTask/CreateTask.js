import React, { Component } from 'react';
import './CreateTask.css';
import { tasks } from '../../tasks-data';


class CreateTask extends Component {
  state = {
    tasks: [...tasks],
  }



  render () {

    function addItem() {
      // create a new item
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };
  
      // copy current list of items
      const list = [...this.state.list];
  
      // add the new item to the list
      list.push(newItem);
  
      // update state with new list, reset the new item input
      this.setState({
        list,
        newItem: ""
      });
  
      // update localStorage
      localStorage.setItem("list", JSON.stringify(list));
      localStorage.setItem("newItem", "");
    }


    const createTaskHandler = (event, form) => {
      //prevent page from updating
      event.preventDefault();

      // All tasks
      const taskList = [...this.state.tasks];

      //create new task from form
      const newTask = {
        id: Math.floor(Math.random() * Math.floor(10)),
        category: form.type.value,
        alt: '',
        note: form.note.value,
        assigned: form.assigned.value,
        pet: form.pet.value,
        time: form.time.value,
        repeat: form.iteration.value,
        completedTask: false
      }

      console.log('new task ' + newTask);
      console.log('new task');

    }




  return (
    <div className="create-task-form">
      <form className="create-task-form" id="create-task">

        <h1> Nytt gjøremål </h1>

        <h4> Hva? </h4>
        <p> Hvilket gjøremål? </p>
        <select id="type" name="type" form="create-task" type="text">
          <option value="Måltid"> Måltid </option>
          <option value="Tur"> Tur </option>
          <option value="Medisin"> Medisin </option>
          <option value="Avtale"> Avtale </option>
        </select>

        <p> Hvem gjelder oppgaven? </p>
        <select id="pet" name="pet" form="create-task" type="text">
          <option value="Mara"> Mara </option>
          <option value="Vinnie"> Vinnie </option>
        </select>

        <h4> Når? </h4>
        <p> Hvor ofte?</p>
        <select id="iteration" name="iteration" form="create-task" type="text">
          <option value="reoccuring"> Gjentagende </option>
          <option value="once"> Bare denne gangen</option>
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
        <input id="time" name="time" type="time" placeholder="Text" required/>

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

        <button id="submit" name="submit" className="submit-btn" type="submit" value="Lag oppgave" form="create-task" onClick={createTaskHandler}> Lag oppgave </button>

      </form>

    </div>
  )
}
}


export default CreateTask;
