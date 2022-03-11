import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

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

    setPersons([...persons, { name: newName }]);
    setNewName("");
  };

  const handleNameChange = (evt) => {
    setNewName(evt.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
