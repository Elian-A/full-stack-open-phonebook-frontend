import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "00-00-0000000" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let alreadyExist = false;

    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
        alreadyExist = true;
      }
    });

    if (alreadyExist) return;

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

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
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{`${person.name}  ${person.number}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
