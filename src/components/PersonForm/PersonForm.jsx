import React from "react";

const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  createPerson,
  changePhoneNumber,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    //validate fields
    let alreadyExist = false;
    persons.forEach((person) => {
      if (person.name === newName && person.number === newNumber) {
        alert(`${newName} is already added to phonebook`);
        alreadyExist = true;
      }
      if (person.name === newName && person.number !== newNumber) {
        const confirmation = window.confirm(
          `${person.name} is already added to phonebook, replace the old number with a new one?`
        );
        if (!confirmation) {
          alreadyExist = true;
          return;
        }
        const changedPhoneNumber = {
          name: newName,
          number: newNumber,
        };
        changePhoneNumber(person.id, changedPhoneNumber);
        alreadyExist = true;
      }
    });

    setNewName("");
    setNewNumber("");
    if (alreadyExist) return;

    // post verb and state refresh
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    createPerson(newPerson);
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
          name:{" "}
          <input
            onChange={handleNameChange}
            value={newName}
            placeholder="Arto Hellas"
          />
        </div>
        <div>
          number:{" "}
          <input
            onChange={handleNumberChange}
            value={newNumber}
            placeholder="0000-000000"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
