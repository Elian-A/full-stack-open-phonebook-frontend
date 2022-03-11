import axios from "axios";
import React from "react";

const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  setPersons,
  createPerson,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    //validate fields
    let alreadyExist = false;
    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
        alreadyExist = true;
      }
    });
    if (alreadyExist) return;

    // post verb and state refresh
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    createPerson(newPerson);
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  //form events
  const handleNameChange = (evt) => {
    setNewName(evt.target.value);
  };
  const handleNumberChange = (evt) => {
    setNewNumber(evt.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
